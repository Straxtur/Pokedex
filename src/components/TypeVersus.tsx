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

const TypeVersus = () => {
	return (
		<tr>
			<th className="w-[30px]">
				<span className="invisible">-</span>
				{/* Espacio invisible para evitar errores */}
			</th>
			<th className="px-4 py-2">
				<NormalIcon size="30" />
			</th>
			<th className="px-4 py-2">
				<FightingIcon size="30" />
			</th>
			<th className="px-4 py-2">
				<FlyingIcon size="30" />
			</th>
			<th className="px-4 py-2">
				<PoisonIcon size="30" />
			</th>
			<th className="px-4 py-2">
				<GroundIcon size="30" />
			</th>
			<th className="px-4 py-2">
				<RockIcon size="30" />
			</th>
			<th className="px-4 py-2">
				<BugIcon size="30" />
			</th>
			<th className="px-4 py-2">
				<GhostIcon size="30" />
			</th>
			<th className="px-4 py-2">
				<SteelIcon size="30" />
			</th>
			<th className="px-4 py-2">
				<FireIcon size="30" />
			</th>
			<th className="px-4 py-2">
				<WaterIcon size="30" />
			</th>
			<th className="px-4 py-2">
				<GrassIcon size="30" />
			</th>
			<th className="px-4 py-2">
				<ElectricIcon size="30" />
			</th>
			<th className="px-4 py-2">
				<PsychicIcon size="30" />
			</th>
			<th className="px-4 py-2">
				<IceIcon size="30" />
			</th>
			<th className="px-4 py-2">
				<DragonIcon size="30" />
			</th>
			<th className="px-4 py-2">
				<DarkIcon size="30" />
			</th>
			<th className="px-4 py-2">
				<FairyIcon size="30" />
			</th>
		</tr>
	);
};

export default TypeVersus;
