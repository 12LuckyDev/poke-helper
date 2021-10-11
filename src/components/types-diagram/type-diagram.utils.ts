import { FC, SVGProps } from "react";
import * as TYPE_ICONS from "../../icons/types";
import {
	DamageMultiplierType,
	DamageRelation,
	PokeApiTypeFull,
	mapPokeApiDamageRelationsToDamageRelationArray,
} from "../../models";

type SvgIco = FC<
	SVGProps<SVGSVGElement> & {
		title?: string | undefined;
	}
>;

export const getIconAndColor = (
	name: string
): { svg: SvgIco; color: string } => {
	switch (name) {
		case "bug":
			return { svg: TYPE_ICONS.Bug, color: "#93bb3a" };
		case "dark":
			return { svg: TYPE_ICONS.Dark, color: "#595761" };
		case "dragon":
			return { svg: TYPE_ICONS.Dragon, color: "#176bc5" };
		case "electric":
			return { svg: TYPE_ICONS.Electric, color: "#f1d85a" };
		case "fairy":
			return { svg: TYPE_ICONS.Fairy, color: "#ed93e4" };
		case "fighting":
			return { svg: TYPE_ICONS.Fighting, color: "#d14460" };
		case "fire":
			return { svg: TYPE_ICONS.Fire, color: "#f9a555" };
		case "flying":
			return { svg: TYPE_ICONS.Flying, color: "#a2bcea" };
		case "ghost":
			return { svg: TYPE_ICONS.Ghost, color: "#606fba" };
		case "grass":
			return { svg: TYPE_ICONS.Grass, color: "#63bc5d" };
		case "ground":
			return { svg: TYPE_ICONS.Ground, color: "#d87c52" };
		case "ice":
			return { svg: TYPE_ICONS.Ice, color: "#79d0c2" };
		case "normal":
			return { svg: TYPE_ICONS.Normal, color: "#a0a29f" };
		case "poison":
			return { svg: TYPE_ICONS.Poison, color: "#b567cd" };
		case "psychic":
			return { svg: TYPE_ICONS.Psychic, color: "#f88684" };
		case "rock":
			return { svg: TYPE_ICONS.Rock, color: "#c9bb8d" };
		case "steel":
			return { svg: TYPE_ICONS.Steel, color: "#5995a2" };
		case "water":
			return { svg: TYPE_ICONS.Water, color: "#579edd" };
		default:
			return { svg: TYPE_ICONS.Unknown, color: "#ffffff" };
	}
};

const mergeMultipliers = (
	first: DamageMultiplierType | null,
	second: DamageMultiplierType | null
) => {
	const firstMultiplier: number = first ?? 1;
	const secondMultiplier: number = second ?? 1;
	const combinedMultiplier = firstMultiplier * secondMultiplier;
	return combinedMultiplier !== 1
		? (combinedMultiplier as DamageMultiplierType)
		: null;
};

const mergeDamageRelations = (
	firstType: DamageRelation[],
	secondType: DamageRelation[]
): DamageRelation[] => {
	const bothTypes = [...firstType];

	secondType.forEach((secondTypeRelation) => {
		const firstTypeRelation = bothTypes.find(
			({ toType }) => toType === secondTypeRelation.toType
		);
		if (firstTypeRelation) {
			firstTypeRelation.attackDamageMultiplier = mergeMultipliers(
				firstTypeRelation.attackDamageMultiplier,
				secondTypeRelation.attackDamageMultiplier
			);
			firstTypeRelation.defenceDamageMultiplier = mergeMultipliers(
				firstTypeRelation.defenceDamageMultiplier,
				secondTypeRelation.defenceDamageMultiplier
			);
		} else {
			bothTypes.push(secondTypeRelation);
		}
	});
	return bothTypes.filter(
		(t) =>
			t.attackDamageMultiplier !== null || t.defenceDamageMultiplier !== null
	);
};

export const calcDamageRelations = (
	types: PokeApiTypeFull[],
	selected: string[]
): DamageRelation[] => {
	const [firstType, secondType] = selected;

	let firstTypeResult: DamageRelation[] = [];
	if (!!firstType) {
		firstTypeResult = mapPokeApiDamageRelationsToDamageRelationArray(
			types.find((t) => t.name === firstType)?.damage_relations
		);
	}

	if (!!secondType) {
		const secondTypeResult = mapPokeApiDamageRelationsToDamageRelationArray(
			types.find((t) => t.name === secondType)?.damage_relations
		);
		return mergeDamageRelations(firstTypeResult, secondTypeResult);
	}

	return firstTypeResult;
};
