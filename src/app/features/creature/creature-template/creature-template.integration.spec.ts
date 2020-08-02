import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import Spy = jasmine.Spy;

import { CreatureTemplateComponent } from './creature-template.component';
import { CreatureTemplateModule } from './creature-template.module';
import { MysqlQueryService } from '@keira-shared/services/mysql-query.service';
import { EditorPageObject } from '@keira-testing/editor-page-object';
import { CreatureTemplate } from '@keira-types/creature-template.type';
import { CreatureHandlerService } from '../creature-handler.service';
import { SaiCreatureHandlerService } from '../sai-creature-handler.service';

class CreatureTemplatePage extends EditorPageObject<CreatureTemplateComponent> {}

describe('CreatureTemplate integration tests', () => {
  let component: CreatureTemplateComponent;
  let fixture: ComponentFixture<CreatureTemplateComponent>;
  let queryService: MysqlQueryService;
  let querySpy: Spy;
  let handlerService: CreatureHandlerService;
  let page: CreatureTemplatePage;

  const id = 1234;
  const expectedFullCreateQuery = 'DELETE FROM `creature_template` WHERE (`Entry`= 123456);\n' +
    'INSERT INTO `creature_template` (`Entry`, `Name`, `SubName`, `IconName`, `MinLevel`, `MaxLevel`,' +
    ' `HeroicEntry`, `ModelId1`, `ModelId2`, `ModelId3`, `ModelId4`, `Faction`, `Scale`, `Family`, `CreatureType`,' +
    ' `InhabitType`, `RegenerateStats`, `RacialLeader`, `NpcFlags`, `UnitFlags`, `DynamicFlags`, `ExtraFlags`,' +
    ' `CreatureTypeFlags`, `SpeedWalk`, `SpeedRun`, `Detection`, `CallForHelp`, `Pursuit`, `Leash`, `Timeout`,' +
    ' `UnitClass`, `Rank`, `Expansion`, `HealthMultiplier`, `PowerMultiplier`, `DamageMultiplier`, `DamageVariance`,' +
    ' `ArmorMultiplier`, `ExperienceMultiplier`, `MinLevelHealth`, `MaxLevelHealth`, `MinLevelMana`, `MaxLevelMana`,' +
    ' `MinMeleeDmg`, `MaxMeleeDmg`, `MinRangedDmg`, `MaxRangedDmg`, `Armor`, `MeleeAttackPower`, `RangedAttackPower`,' +
    ' `MeleeBaseAttackTime`, `RangedBaseAttackTime`, `DamageSchool`, `MinLootGold`, `MaxLootGold`, `LootId`, `PickpocketLootId`,' +
    ' `SkinningLootId`, `KillCredit1`, `KillCredit2`, `MechanicImmuneMask`, `SchoolImmuneMask`, `ResistanceHoly`, `ResistanceFire`,' +
    ' `ResistanceNature`, `ResistanceFrost`, `ResistanceShadow`, `ResistanceArcane`, `PetSpellDataId`, `MovementType`, `TrainerType`,' +
    ' `TrainerSpell`, `TrainerClass`, `TrainerRace`, `TrainerTemplateId`, `VendorTemplateId`, `EquipmentTemplateId`, `GossipMenuId`,' +
    ' `visibilityDistanceType`, `AIName`, `ScriptName`) VALUES\n'
    ' (123456, \'\', NULL, NULL, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 20,' +
    ' 0, 0, 0, 0, 0, 0, -1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2000, 2000,' +
    ' 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, \'\', \'\');';

  const originalEntity = new CreatureTemplate();
  originalEntity.entry = id;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CreatureTemplateModule,
        RouterTestingModule,
      ],
      providers: [
        CreatureHandlerService,
        SaiCreatureHandlerService,
      ],
    })
      .compileComponents();
  }));

  function setup(creatingNew: boolean) {
    handlerService = TestBed.inject(CreatureHandlerService);
    handlerService['_selected'] = `${id}`;
    handlerService.isNew = creatingNew;

    queryService = TestBed.inject(MysqlQueryService);
    querySpy = spyOn(queryService, 'query').and.returnValue(of());

    spyOn(queryService, 'selectAll').and.returnValue(of(
      creatingNew ? [] : [originalEntity]
    ));

    fixture = TestBed.createComponent(CreatureTemplateComponent);
    component = fixture.componentInstance;
    page = new CreatureTemplatePage(fixture);
    fixture.autoDetectChanges(true);
    fixture.detectChanges();
  }

  describe('Creating new', () => {
    beforeEach(() => setup(true));

    it('should correctly initialise', () => {
      page.expectQuerySwitchToBeHidden();
      page.expectFullQueryToBeShown();
      page.expectFullQueryToContain(expectedFullCreateQuery);
    });

    it('changing a property and executing the query should correctly work', () => {
      const expectedQuery = 'DELETE FROM `creature_template` WHERE (`entry` = 123456);\n' +
      'INSERT INTO `creature_template` (`Entry`, `Name`, `SubName`, `IconName`, `MinLevel`, `MaxLevel`,' +
    ' `HeroicEntry`, `ModelId1`, `ModelId2`, `ModelId3`, `ModelId4`, `Faction`, `Scale`, `Family`, `CreatureType`,' +
    ' `InhabitType`, `RegenerateStats`, `RacialLeader`, `NpcFlags`, `UnitFlags`, `DynamicFlags`, `ExtraFlags`,' +
    ' `CreatureTypeFlags`, `SpeedWalk`, `SpeedRun`, `Detection`, `CallForHelp`, `Pursuit`, `Leash`, `Timeout`,' +
    ' `UnitClass`, `Rank`, `Expansion`, `HealthMultiplier`, `PowerMultiplier`, `DamageMultiplier`, `DamageVariance`,' +
    ' `ArmorMultiplier`, `ExperienceMultiplier`, `MinLevelHealth`, `MaxLevelHealth`, `MinLevelMana`, `MaxLevelMana`,' +
    ' `MinMeleeDmg`, `MaxMeleeDmg`, `MinRangedDmg`, `MaxRangedDmg`, `Armor`, `MeleeAttackPower`, `RangedAttackPower`,' +
    ' `MeleeBaseAttackTime`, `RangedBaseAttackTime`, `DamageSchool`, `MinLootGold`, `MaxLootGold`, `LootId`, `PickpocketLootId`,' +
    ' `SkinningLootId`, `KillCredit1`, `KillCredit2`, `MechanicImmuneMask`, `SchoolImmuneMask`, `ResistanceHoly`, `ResistanceFire`,' +
    ' `ResistanceNature`, `ResistanceFrost`, `ResistanceShadow`, `ResistanceArcane`, `PetSpellDataId`, `MovementType`, `TrainerType`,' +
    ' `TrainerSpell`, `TrainerClass`, `TrainerRace`, `TrainerTemplateId`, `VendorTemplateId`, `EquipmentTemplateId`, `GossipMenuId`,' +
    ' `visibilityDistanceType`, `AIName`, `ScriptName`) VALUES\n'
    ' (123456, \'\', NULL, NULL, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 20,' +
    ' 0, 0, 0, 0, 0, 0, -1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2000, 2000,' +
    ' 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, \'\', \'\');';
      querySpy.calls.reset();

      page.setInputValueById('name', 'Shin');
      page.clickExecuteQuery();

      page.expectFullQueryToContain(expectedQuery);
      expect(querySpy).toHaveBeenCalledTimes(1);
      expect(querySpy.calls.mostRecent().args[0]).toContain(expectedQuery);
    });

    it('should correctly update the unsaved status', () => {
      const field = 'difficulty_entry_1';
      expect(handlerService.isCreatureTemplateUnsaved).toBe(false);
      page.setInputValueById(field, 3);
      expect(handlerService.isCreatureTemplateUnsaved).toBe(true);
      page.setInputValueById(field, 0);
      expect(handlerService.isCreatureTemplateUnsaved).toBe(false);
    });

  });

  describe('Editing existing', () => {
    beforeEach(() => setup(false));

    it('should correctly initialise', () => {
      page.expectDiffQueryToBeShown();
      page.expectDiffQueryToBeEmpty();
      page.expectFullQueryToContain(expectedFullCreateQuery);
    });

    it('changing all properties and executing the query should correctly work', () => {
      const expectedQuery = 'UPDATE `creature_template` SET ' +
        '`difficulty_entry_2` = 1, `difficulty_entry_3` = 2, `KillCredit1` = 3, `KillCredit2` = 4, `modelid1` = 5, `modelid2` = 6, ' +
        '`modelid3` = 7, `modelid4` = 8, `name` = \'9\', `subname` = \'10\', `IconName` = \'11\', `gossip_menu_id` = 12, ' +
        '`minlevel` = 13, `maxlevel` = 14, `exp` = 15, `faction` = 16, `npcflag` = 17, `speed_walk` = 18, `speed_run` = 19, ' +
        '`scale` = 20, `rank` = 21, `mindmg` = 22, `maxdmg` = 23, `dmgschool` = 24, `attackpower` = 25, `DamageModifier` = 26, ' +
        '`BaseAttackTime` = 27, `RangeAttackTime` = 28, `unit_class` = 29, `unit_flags` = 30, `unit_flags2` = 31, ' +
        '`dynamicflags` = 32, `family` = 33, `trainer_type` = 34, `trainer_spell` = 35, `trainer_class` = 36, `trainer_race` = 37, ' +
        '`minrangedmg` = 38, `maxrangedmg` = 39, `rangedattackpower` = 40, `type` = 41, `type_flags` = 42, `lootid` = 43, ' +
        '`pickpocketloot` = 44, `skinloot` = 45, `resistance1` = 46, `resistance2` = 47, `resistance3` = 48, `resistance4` = 49, ' +
        '`resistance5` = 50, `resistance6` = 51, `spell1` = 52, `spell2` = 53, `spell3` = 54, `spell4` = 55, `spell5` = 56, ' +
        '`spell6` = 57, `spell7` = 58, `spell8` = 59, `PetSpellDataId` = 60, `VehicleId` = 61, `mingold` = 62, `maxgold` = 63, ' +
        '`AIName` = \'64\', `MovementType` = 65, `InhabitType` = 66, `HoverHeight` = 67, `HealthModifier` = 68, `ManaModifier` = 69, ' +
        '`ArmorModifier` = 70, `RacialLeader` = 71, `movementId` = 72, `RegenHealth` = 73, `mechanic_immune_mask` = 74, ' +
        '`flags_extra` = 75, `ScriptName` = \'76\' WHERE (`entry` = 123456);';
      querySpy.calls.reset();

      page.changeAllFields(originalEntity, ['VerifiedBuild']);
      page.clickExecuteQuery();

      page.expectDiffQueryToContain(expectedQuery);
      expect(querySpy).toHaveBeenCalledTimes(1);
      expect(querySpy.calls.mostRecent().args[0]).toContain(expectedQuery);
    });

    it('changing values should correctly update the queries', () => {
      // Note: full query check has been shortened here because the table is too big, don't do this in other tests unless necessary

      page.setInputValueById('Name', 'Shin');
      page.expectDiffQueryToContain(
        'UPDATE `creature_template` SET `Name` = \'Shin\' WHERE (`Entry` = 123456);'
      );
      page.expectFullQueryToContain('Shin');

      page.setInputValueById('subname', 'AC Developer');
      page.expectDiffQueryToContain(
        'UPDATE `creature_template` SET `Name` = \'Shin\', `SubName` = \'AC Developer\' WHERE (`Entry` = 123456);'
      );
      page.expectFullQueryToContain('Shin');
      page.expectFullQueryToContain('AC Developer');
    });

    it('changing a value via FlagsSelector should correctly work', async () => {
      const field = 'UnitFlags';
      page.clickElement(page.getSelectorBtn(field));
      page.expectModalDisplayed();
      await page.whenReady();

      page.toggleFlagInRowExternal(2);

      await page.whenReady();
      page.toggleFlagInRowExternal(12);

      await page.whenReady();
      page.clickModalSelect();
      await page.whenReady();

      expect(page.getInputById(field).value).toEqual('4100');
      page.expectDiffQueryToContain(
        'UPDATE `creature_template` SET `UnitFlags` = 4100 WHERE (`Entry` = 123456);'
      );

      // Note: full query check has been shortened here because the table is too big, don't do this in other tests unless necessary
      page.expectFullQueryToContain('4100');
    });
  });
});

