import type { Types } from "@/types/pokemonTypes";
import {
	BugIcon,
	DarkIcon,
	DragonIcon,
	ElectricIcon,
	FairyIcon,
	FightingIcon,
	FireIcon,
	FlyingIcon,
	GhostIcon,
	GrassIcon,
	GroundIcon,
	IceIcon,
	NormalIcon,
	PoisonIcon,
	PsychicIcon,
	RockIcon,
	SteelIcon,
	WaterIcon,
} from "@components/Icons";

export const types = [
	{ name: "Bug", icon: BugIcon },
	{ name: "Dark", icon: DarkIcon },
	{ name: "Dragon", icon: DragonIcon },
	{ name: "Electric", icon: ElectricIcon },
	{ name: "Fairy", icon: FairyIcon },
	{ name: "Fighting", icon: FightingIcon },
	{ name: "Fire", icon: FireIcon },
	{ name: "Flying", icon: FlyingIcon },
	{ name: "Ghost", icon: GhostIcon },
	{ name: "Grass", icon: GrassIcon },
	{ name: "Ground", icon: GroundIcon },
	{ name: "Ice", icon: IceIcon },
	{ name: "Normal", icon: NormalIcon },
	{ name: "Poison", icon: PoisonIcon },
	{ name: "Psychic", icon: PsychicIcon },
	{ name: "Rock", icon: RockIcon },
	{ name: "Steel", icon: SteelIcon },
	{ name: "Water", icon: WaterIcon },
];

export const typeVersus: Exclude<Types, undefined>[] = [
	"normal",
	"fighting",
	"flying",
	"poison",
	"ground",
	"rock",
	"bug",
	"ghost",
	"steel",
	"fire",
	"water",
	"grass",
	"electric",
	"psychic",
	"ice",
	"dragon",
	"dark",
	"fairy",
];

export const typeAttack: Record<
	Exclude<Types, undefined>,
	Partial<Record<Exclude<Types, undefined>, number>>
> = {
	normal: {
		rock: 0.5,
		ghost: 0,
		steel: 0.5,
	},
	fire: {
		grass: 2,
		ice: 2,
		bug: 2,
		steel: 2,
		fire: 0.5,
		water: 0.5,
		rock: 0.5,
		dragon: 0.5,
	},
	water: {
		fire: 2,
		ground: 2,
		rock: 2,
		water: 0.5,
		grass: 0.5,
		dragon: 0.5,
	},
	electric: {
		water: 2,
		flying: 2,
		electric: 0.5,
		grass: 0.5,
		ground: 0,
	},
	grass: {
		water: 2,
		ground: 2,
		rock: 2,
		fire: 0.5,
		grass: 0.5,
		poison: 0.5,
		flying: 0.5,
		bug: 0.5,
		dragon: 0.5,
		steel: 0.5,
	},
	ice: {
		grass: 2,
		ground: 2,
		flying: 2,
		dragon: 2,
		fire: 0.5,
		water: 0.5,
		ice: 0.5,
		steel: 0.5,
	},
	fighting: {
		normal: 2,
		rock: 2,
		steel: 2,
		ice: 2,
		dark: 2,
		flying: 0.5,
		poison: 0.5,
		bug: 0.5,
		psychic: 0.5,
		ghost: 0,
		fairy: 0.5,
	},
	poison: {
		grass: 2,
		fairy: 2,
		poison: 0.5,
		ground: 0.5,
		rock: 0.5,
		ghost: 0.5,
		steel: 0,
	},
	ground: {
		fire: 2,
		electric: 2,
		poison: 2,
		rock: 2,
		steel: 2,
		grass: 0.5,
		bug: 0.5,
		flying: 0,
	},
	flying: {
		grass: 2,
		fighting: 2,
		bug: 2,
		electric: 0.5,
		rock: 0.5,
		steel: 0.5,
	},
	psychic: {
		fighting: 2,
		poison: 2,
		psychic: 0.5,
		steel: 0.5,
		dark: 0,
	},
	bug: {
		grass: 2,
		psychic: 2,
		dark: 2,
		fire: 0.5,
		fighting: 0.5,
		poison: 0.5,
		flying: 0.5,
		ghost: 0.5,
		steel: 0.5,
		fairy: 0.5,
	},
	rock: {
		fire: 2,
		ice: 2,
		flying: 2,
		bug: 2,
		fighting: 0.5,
		ground: 0.5,
		steel: 0.5,
	},
	ghost: {
		ghost: 2,
		psychic: 2,
		normal: 0,
		dark: 0.5,
	},
	dragon: {
		dragon: 2,
		steel: 0.5,
		fairy: 0,
	},
	dark: {
		psychic: 2,
		ghost: 2,
		fighting: 0.5,
		dark: 0.5,
		fairy: 0.5,
	},
	steel: {
		ice: 2,
		rock: 2,
		fairy: 2,
		fire: 0.5,
		water: 0.5,
		electric: 0.5,
		steel: 0.5,
	},
	fairy: {
		fighting: 2,
		dragon: 2,
		dark: 2,
		fire: 0.5,
		poison: 0.5,
		steel: 0.5,
	},
};

export const typeDefenses: Record<
	Exclude<Types, undefined>,
	Partial<Record<Exclude<Types, undefined>, number>>
> = {
	normal: {
		rock: 0.5,
		ghost: 0,
		steel: 0.5,
	},
	fire: {
		fire: 0.5,
		water: 2,
		grass: 0.5,
		ice: 0.5,
		bug: 0.5,
		rock: 2,
		steel: 0.5,
		fairy: 0.5,
	},
	water: {
		fire: 0.5,
		water: 0.5,
		grass: 2,
		electric: 2,
		ice: 0.5,
		steel: 0.5,
	},
	electric: {
		electric: 0.5,
		ground: 0,
		flying: 0.5,
		steel: 0.5,
		grass: 2,
	},
	grass: {
		fire: 2,
		water: 0.5,
		grass: 0.5,
		electric: 0.5,
		ice: 2,
		poison: 2,
		ground: 0.5,
		flying: 2,
		bug: 2,
	},
	ground: {
		water: 2,
		grass: 2,
		ice: 2,
		electric: 0,
		poison: 0.5,
		rock: 0.5,
	},
	rock: {
		normal: 0.5,
		fire: 0.5,
		water: 2,
		grass: 2,
		fighting: 2,
		poison: 0.5,
		ground: 2,
		flying: 0.5,
		steel: 2,
	},
	bug: {
		fire: 2,
		grass: 0.5,
		fighting: 0.5,
		ground: 0.5,
		flying: 2,
		rock: 2,
	},
	ghost: {
		normal: 0,
		fighting: 0,
		poison: 0.5,
		bug: 0.5,
		ghost: 2,
		dark: 2,
	},
	steel: {
		normal: 0.5,
		fire: 2,
		grass: 0.5,
		ice: 0.5,
		fighting: 2,
		poison: 0,
		ground: 2,
		flying: 0.5,
		psychic: 0.5,
		bug: 0.5,
		rock: 0.5,
		dragon: 0.5,
		steel: 0.5,
		fairy: 0.5,
	},
	fighting: {
		bug: 0.5,
		dark: 0.5,
		flying: 2,
		psychic: 2,
		rock: 0.5,
		fairy: 2,
	},
	flying: {
		electric: 2,
		grass: 0.5,
		ground: 0,
		fighting: 0.5,
		bug: 0.5,
		rock: 2,
		ice: 2,
	},
	poison: {
		grass: 0.5,
		fighting: 0.5,
		poison: 0.5,
		ground: 2,
		psychic: 2,
		bug: 0.5,
		fairy: 0.5,
	},
	psychic: {
		fighting: 0.5,
		psychic: 0.5,
		bug: 2,
		ghost: 2,
		dark: 2,
	},
	ice: {
		ice: 0.5,
		fire: 2,
		fighting: 2,
		rock: 2,
		steel: 2,
	},
	dragon: {
		fire: 0.5,
		water: 0.5,
		grass: 0.5,
		electric: 0.5,
		ice: 2,
		dragon: 2,
		fairy: 2,
	},
	dark: {
		fighting: 2,
		psychic: 0,
		bug: 2,
		dark: 0.5,
		ghost: 0.5,
		fairy: 2,
	},
	fairy: {
		fighting: 0.5,
		dragon: 0,
		dark: 0.5,
		steel: 2,
		poison: 2,
	},
};
