export interface moves {
	move: {
		name: string;
		url: string;
	};
}

export interface MovesDetails {
	accuracy: number;
	damage_class: ContestType;
	effect_chance: null;
	effect_entries: EffectEntry[];
	id: number;
	name: string;
	power: number;
	pp: number;
	priority: number;
	super_contest_effect: ContestEffect;
	type: ContestType;
}

export interface ContestType {
	name: string;
	url: string;
}

export interface EffectEntry {
	effect: string;
	language: ContestType;
	short_effect: string;
}

export interface ContestEffect {
	url: string;
}
