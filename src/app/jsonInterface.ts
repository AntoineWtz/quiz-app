import { Quiz } from "./quiz";

// interface Quiz pour typer les données de l'API
export interface JsonInterface {
    response_code: number;
    results: Quiz[];
}