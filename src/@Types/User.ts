import { AlgaNews } from "./AlgaNews";

export namespace User{
  
  export type Summary = AlgaNews.components['schemas']['UserSummary']
  export type Metrics = AlgaNews.components['schemas']['UserMetrics']
  export type Input = AlgaNews.components['schemas']['UserInput']
  export type IdInput = AlgaNews.components['schemas']['UserIdInput']
  export type Minimal = AlgaNews.components['schemas']['UserMinimal']
  export type Detailed = AlgaNews.components['schemas']['UserDetailed']
  export type EditorSummary = AlgaNews.components['schemas']['EditorSummary']
  export type EditorDetailed = AlgaNews.components['schemas']['EditorDetailed']
  
  export type Role = AlgaNews.components['schemas']['Role']
  export type Skill = AlgaNews.components['schemas']['Skill']
}