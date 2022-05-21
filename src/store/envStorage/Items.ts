import { ApiKey } from "../../domain/types";
import { getEnvStorage } from "./GetEnvStorage";

export const ApiKeyItem = getEnvStorage().getItem<ApiKey>("API_KEY");
