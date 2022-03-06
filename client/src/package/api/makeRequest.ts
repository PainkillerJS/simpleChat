import axios from "axios";
import { EMethodRequest } from "../../types";

export default async <T>(url: string, method: EMethodRequest, body?: T) => await axios[method](url, body);
