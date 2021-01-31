export type ResultDataType = {
  label:
    | "identity_attack"
    | "threat"
    | "toxicity"
    | "sexual_explicit"
    | "insult"
    | "obscene"
    | "severe_toxicity";
  results: { match: boolean; probabilities: { 0: number; 1: number } }[];
}[];
