import axios, { AxiosInstance, AxiosRequestConfig } from "axios"
import { SeamAPIError } from "./lib/api-error"
import { Routes } from "./routes"
import { ErroredAPIResponse, SuccessfulAPIResponse } from "./types/globals"

interface SeamClientOptions {
  /* Seam API Key */
  apiKey?: string
  /**
   * Seam Endpoint to use, defaults to https://connect.getseam.com
   **/
  endpoint?: string
  /**
   * Workspace if using session authentication, defaults to SEAM_WORKSPACE_ID
   * or undefined
   **/
  workspaceId?: string
}

class Seam extends Routes {
  private client: AxiosInstance

  constructor(apiKeyOrOptions?: string | SeamClientOptions) {
    super()

    const seamClientDefaults: SeamClientOptions = {
      apiKey: process?.env?.SEAM_API_KEY,
      endpoint: process?.env?.SEAM_API_URL || "https://connect.getseam.com",
      workspaceId: process?.env?.SEAM_WORKSPACE_ID,
    }

    let options: SeamClientOptions
    if (typeof apiKeyOrOptions === "string") {
      options = { ...seamClientDefaults, apiKey: apiKeyOrOptions }
    } else {
      options = { ...seamClientDefaults, ...apiKeyOrOptions }
    }

    const { apiKey, endpoint, workspaceId } = options

    const isRegularAPIKey = apiKey?.startsWith("seam_")

    if (isRegularAPIKey && workspaceId)
      throw new Error(
        "You can't use API Key Authentication AND specify a workspace. Your API Key only works for the workspace it was created in. To use Session Key Authentication with multi-workspace support, contact Seam support."
      )

    if (!apiKey) {
      throw new Error(
        "SEAM_API_KEY not found in environment, and apiKey not provided"
      )
    }

    this.client = axios.create({
      baseURL: endpoint,
      headers: {
        Authorization: `Bearer ${apiKey}`,

        // only needed for session key authentication
        ...(!workspaceId ? {} : { "Seam-Workspace": workspaceId }),
      },
    })
  }

  public async makeRequest<T>(
    request: AxiosRequestConfig
  ): Promise<SuccessfulAPIResponse<T>> {
    try {
      const response = await this.client.request(request)
      return response.data
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        throw new SeamAPIError(
          error.response.status,
          (error.response.data as ErroredAPIResponse).error
        )
      }

      throw error
    }
  }
}

export default Seam

export * from "./types/globals"
export * from "./types/models"
export * from "./types/route-requests"
export * from "./types/route-responses"
export * from "./lib/api-error"
