import { TableRow } from './general';

export const CREATURE_TEMPLATE_TABLE = 'creature_template';
export const CREATURE_TEMPLATE_ID = 'Entry';
export const CREATURE_TEMPLATE_NAME = 'Name';
export const CREATURE_TEMPLATE_CUSTOM_STARTING_ID = 9_000_000;
export const CREATURE_TEMPLATE_SEARCH_FIELDS = [
  CREATURE_TEMPLATE_ID,
  CREATURE_TEMPLATE_NAME,
  'Subname'
];

export const CREATURE_TEMPLATE_LOOT_ID = 'LootId';
export const CREATURE_TEMPLATE_PICKPOCKETING_LOOT_ID = 'PickpocketLootId';
export const CREATURE_TEMPLATE_SKINNING_LOOT_ID = 'SkinningLootId';

export class CreatureTemplate extends TableRow {
  Entry: number = 0;
  Name: string = '';
  SubName: string = null;
  IconName: string = '';
  MinLevel: number = 1;
  MaxLevel: number = 1;
  HeroicEntry: number = 0;
  ModelId1: number = 0;
  ModelId2: number = 0;
  ModelId3: number = 0;
  ModelId4: number = 0;
  Faction: number = 0;
  Scale: number = 1;
  Family: number = 0;
  CreatureType: number = 0;
  InhabitType: number = 3;
  RegenerateStats: number = 3;
  RacialLeader: number = 0;
  NpcFlags: number = 0;
  UnitFlags: number = 0;
  DynamicFlags: number = 0;
  ExtraFlags: number = 0;
  CreatureTypeFlags: number = 0;
  SpeedWalk: number = 0;
  SpeedRun: number = 0;
  Detection: number = 20;
  CallForHelp: number = 0;
  Pursuit: number = 0;
  Leash: number = 0;
  Timeout: number = 0;
  UnitClass: number = 0;
  Rank: number = 0;
  Expansion: number = -1;
  HealthMultiplier: number = 1;
  PowerMultiplier: number = 1;
  DamageMultiplier: number = 1;
  DamageVariance: number = 1;
  ArmorMultiplier: number = 1;
  ExperienceMultiplier: number = 1;
  MinLevelHealth: number = 0;
  MaxLevelHealth: number = 0;
  MinLevelMana: number = 0;
  MaxLevelMana: number = 0;
  MinMeleeDmg: number = 0;
  MaxMeleeDmg: number = 0;
  MinRangedDmg: number = 0;
  MaxRangedDmg: number = 0;
  Armor: number = 0;
  MeleeAttackPower: number = 0;
  RangedAttackPower: number = 0;
  MeleeBaseAttackTime: number = 2000;
  RangedBaseAttackTime: number = 2000;
  DamageSchool: number = 0;
  MinLootGold: number = 0;
  MaxLootGold: number = 0;
  LootId: number = 0;
  PickpocketLootId: number = 0;
  SkinningLootId: number = 0;
  KillCredit1: number = 0;
  KillCredit2: number = 0;
  MechanicImmuneMask: number = 0;
  SchoolImmuneMask: number = 0;
  ResistanceHoly: number = 0;
  ResistanceFire: number = 0;
  ResistanceNature: number = 0;
  ResistanceFrost: number = 0;
  ResistanceShadow: number = 0;
  ResistanceArance: number = 0;
  PetSpellDataId: number = 0;
  MovementType: number = 0;
  TrainerType: number = 0;
  TrainerSpell: number = 0;
  TrainerClass: number = 0;
  TrainerRace: number = 0;
  TrainerTemplateId: number = 0;
  VendorTemplateId: number = 0;
  EquipmentTemplateId: number = 0;
  GossipMenuId: number = 0;
  visibilityDistanceType: number = 0;
  AIName: string = '';
  ScriptName: string = '';
}
