export interface TimeTracking {
  timeStart: Date
  isPaused: boolean
  timeTaken: number  // seconds
}

export interface Faction {
  id: number
  name: string
}

export interface Strategy {
  id: number
  name: string
}

export interface Player {
  id: number  // also tracks sitting order
  color: string
  faction: number  // Faction.id
  vps: number
}

export interface SelectedStrategy {
  player?: number  // Player.id
  timeTracking: TimeTracking
  strategy?: number  // Stragety.id
}

export interface SecondaryAction {
  player?: number  // Player.id
  timeTracking: TimeTracking
  hasTakenAction: boolean
}

export interface ActionPhaseTurn {
  player: number  // Player.id
  timeTracking: TimeTracking
  isPass: boolean
  isTactical: boolean
  isStrategy: boolean
  secondaryActions: SecondaryAction[]
  scoredCard: number  // card id
}

export interface Objective {
  slug: string
  name: string
  type: "public" | "secret"
  vps: number
}

export interface StatusPhaseScoring {
  player: number  // Player.id
  publicObjectiveCard: string  // Objective.slug
  secretObjectiveCard: string  // Objective.slug
}

export interface StatusPhase {
  timeTracking: TimeTracking
  isDone: boolean
  scoring: StatusPhaseScoring[]
}

export interface AgendaPhase {
  timeTracking: TimeTracking
  isDone: boolean 
}

export interface Round {
  speakerAtStart: number  // Player.id
  strategyPhase: SelectedStrategy[]
  actionPhase: ActionPhaseTurn[]
  statusPhase: StatusPhase
  agendaPhase?: AgendaPhase
}

export interface Game {
  victoryPoints: number
  currentSpeaker: number  // Player.id
  isMecatolTaken: boolean
  rounds: Round[]
}
