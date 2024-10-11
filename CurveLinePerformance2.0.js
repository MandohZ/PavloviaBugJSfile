/******************************** 
 * Curvelineperformance2.0 *
 ********************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.1.1.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'CurveLinePerformance2.0';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
    'Name': '',
    'Prolific_ID (if applicable)': '',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(Welcomescreen1RoutineBegin());
flowScheduler.add(Welcomescreen1RoutineEachFrame());
flowScheduler.add(Welcomescreen1RoutineEnd());
flowScheduler.add(Welcomescreen2RoutineBegin());
flowScheduler.add(Welcomescreen2RoutineEachFrame());
flowScheduler.add(Welcomescreen2RoutineEnd());
flowScheduler.add(screen_scaleRoutineBegin());
flowScheduler.add(screen_scaleRoutineEachFrame());
flowScheduler.add(screen_scaleRoutineEnd());
flowScheduler.add(rectangleRoutineBegin());
flowScheduler.add(rectangleRoutineEachFrame());
flowScheduler.add(rectangleRoutineEnd());
flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(TutorialscreenRoutineBegin());
flowScheduler.add(TutorialscreenRoutineEachFrame());
flowScheduler.add(TutorialscreenRoutineEnd());
flowScheduler.add(ShapeShowScreenRoutineBegin());
flowScheduler.add(ShapeShowScreenRoutineEachFrame());
flowScheduler.add(ShapeShowScreenRoutineEnd());
flowScheduler.add(ShapeshowScreenRoutineBegin());
flowScheduler.add(ShapeshowScreenRoutineEachFrame());
flowScheduler.add(ShapeshowScreenRoutineEnd());
flowScheduler.add(SummaryScreenTutRoutineBegin());
flowScheduler.add(SummaryScreenTutRoutineEachFrame());
flowScheduler.add(SummaryScreenTutRoutineEnd());
const BlockLooperLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(BlockLooperLoopBegin(BlockLooperLoopScheduler));
flowScheduler.add(BlockLooperLoopScheduler);
flowScheduler.add(BlockLooperLoopEnd);







flowScheduler.add(GoodbyeScreenAndFeedbackRoutineBegin());
flowScheduler.add(GoodbyeScreenAndFeedbackRoutineEachFrame());
flowScheduler.add(GoodbyeScreenAndFeedbackRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'Condsfile1.xlsx', 'path': 'Condsfile1.xlsx'},
    {'name': 'Block1CrestLineTLBR.xlsx', 'path': 'Block1CrestLineTLBR.xlsx'},
    {'name': 'resources/Crest/CrestTL1_1.png', 'path': 'resources/Crest/CrestTL1_1.png'},
    {'name': 'resources/Crest/CrestTL1_2.png', 'path': 'resources/Crest/CrestTL1_2.png'},
    {'name': 'resources/Crest/CrestTL1_3.png', 'path': 'resources/Crest/CrestTL1_3.png'},
    {'name': 'resources/Crest/CrestTL2_1.png', 'path': 'resources/Crest/CrestTL2_1.png'},
    {'name': 'resources/Crest/CrestTL2_2.png', 'path': 'resources/Crest/CrestTL2_2.png'},
    {'name': 'resources/Crest/CrestTL2_3.png', 'path': 'resources/Crest/CrestTL2_3.png'},
    {'name': 'resources/Crest/CrestTL3_1.png', 'path': 'resources/Crest/CrestTL3_1.png'},
    {'name': 'resources/Crest/CrestTL3_2.png', 'path': 'resources/Crest/CrestTL3_2.png'},
    {'name': 'resources/Crest/CrestTL3_3.png', 'path': 'resources/Crest/CrestTL3_3.png'},
    {'name': 'resources/Crest/CrestTL4_1.png', 'path': 'resources/Crest/CrestTL4_1.png'},
    {'name': 'resources/Crest/CrestTL4_2.png', 'path': 'resources/Crest/CrestTL4_2.png'},
    {'name': 'resources/Crest/CrestTL4_3.png', 'path': 'resources/Crest/CrestTL4_3.png'},
    {'name': 'resources/Crest/CrestBR1_1.png', 'path': 'resources/Crest/CrestBR1_1.png'},
    {'name': 'resources/Crest/CrestBR1_2.png', 'path': 'resources/Crest/CrestBR1_2.png'},
    {'name': 'resources/Crest/CrestBR1_3.png', 'path': 'resources/Crest/CrestBR1_3.png'},
    {'name': 'resources/Crest/CrestBR2_1.png', 'path': 'resources/Crest/CrestBR2_1.png'},
    {'name': 'resources/Crest/CrestBR2_2.png', 'path': 'resources/Crest/CrestBR2_2.png'},
    {'name': 'resources/Crest/CrestBR2_3.png', 'path': 'resources/Crest/CrestBR2_3.png'},
    {'name': 'resources/Crest/CrestBR3_1.png', 'path': 'resources/Crest/CrestBR3_1.png'},
    {'name': 'resources/Crest/CrestBR3_2.png', 'path': 'resources/Crest/CrestBR3_2.png'},
    {'name': 'resources/Crest/CrestBR3_3.png', 'path': 'resources/Crest/CrestBR3_3.png'},
    {'name': 'resources/Crest/CrestBR4_1.png', 'path': 'resources/Crest/CrestBR4_1.png'},
    {'name': 'resources/Crest/CrestBR4_2.png', 'path': 'resources/Crest/CrestBR4_2.png'},
    {'name': 'resources/Crest/CrestBR4_3.png', 'path': 'resources/Crest/CrestBR4_3.png'},
    {'name': 'resources/Crest/CrestTL1J10_1.png', 'path': 'resources/Crest/CrestTL1J10_1.png'},
    {'name': 'resources/Crest/CrestTL1J10_2.png', 'path': 'resources/Crest/CrestTL1J10_2.png'},
    {'name': 'resources/Crest/CrestTL1J10_3.png', 'path': 'resources/Crest/CrestTL1J10_3.png'},
    {'name': 'resources/Crest/CrestTL2J10_1.png', 'path': 'resources/Crest/CrestTL2J10_1.png'},
    {'name': 'resources/Crest/CrestTL2J10_2.png', 'path': 'resources/Crest/CrestTL2J10_2.png'},
    {'name': 'resources/Crest/CrestTL2J10_3.png', 'path': 'resources/Crest/CrestTL2J10_3.png'},
    {'name': 'resources/Crest/CrestTL3J10_1.png', 'path': 'resources/Crest/CrestTL3J10_1.png'},
    {'name': 'resources/Crest/CrestTL3J10_2.png', 'path': 'resources/Crest/CrestTL3J10_2.png'},
    {'name': 'resources/Crest/CrestTL3J10_3.png', 'path': 'resources/Crest/CrestTL3J10_3.png'},
    {'name': 'resources/Crest/CrestTL4J10_1.png', 'path': 'resources/Crest/CrestTL4J10_1.png'},
    {'name': 'resources/Crest/CrestTL4J10_2.png', 'path': 'resources/Crest/CrestTL4J10_2.png'},
    {'name': 'resources/Crest/CrestTL4J10_3.png', 'path': 'resources/Crest/CrestTL4J10_3.png'},
    {'name': 'resources/Crest/CrestBR1J10_1.png', 'path': 'resources/Crest/CrestBR1J10_1.png'},
    {'name': 'resources/Crest/CrestBR1J10_2.png', 'path': 'resources/Crest/CrestBR1J10_2.png'},
    {'name': 'resources/Crest/CrestBR1J10_3.png', 'path': 'resources/Crest/CrestBR1J10_3.png'},
    {'name': 'resources/Crest/CrestBR2J10_1.png', 'path': 'resources/Crest/CrestBR2J10_1.png'},
    {'name': 'resources/Crest/CrestBR2J10_2.png', 'path': 'resources/Crest/CrestBR2J10_2.png'},
    {'name': 'resources/Crest/CrestBR2J10_3.png', 'path': 'resources/Crest/CrestBR2J10_3.png'},
    {'name': 'resources/Crest/CrestBR3J10_1.png', 'path': 'resources/Crest/CrestBR3J10_1.png'},
    {'name': 'resources/Crest/CrestBR3J10_2.png', 'path': 'resources/Crest/CrestBR3J10_2.png'},
    {'name': 'resources/Crest/CrestBR3J10_3.png', 'path': 'resources/Crest/CrestBR3J10_3.png'},
    {'name': 'resources/Crest/CrestBR4J10_1.png', 'path': 'resources/Crest/CrestBR4J10_1.png'},
    {'name': 'resources/Crest/CrestBR4J10_2.png', 'path': 'resources/Crest/CrestBR4J10_2.png'},
    {'name': 'resources/Crest/CrestBR4J10_3.png', 'path': 'resources/Crest/CrestBR4J10_3.png'},
    {'name': 'resources/Crest/CrestTL1J20_1.png', 'path': 'resources/Crest/CrestTL1J20_1.png'},
    {'name': 'resources/Crest/CrestTL1J20_2.png', 'path': 'resources/Crest/CrestTL1J20_2.png'},
    {'name': 'resources/Crest/CrestTL1J20_3.png', 'path': 'resources/Crest/CrestTL1J20_3.png'},
    {'name': 'resources/Crest/CrestTL2J20_1.png', 'path': 'resources/Crest/CrestTL2J20_1.png'},
    {'name': 'resources/Crest/CrestTL2J20_2.png', 'path': 'resources/Crest/CrestTL2J20_2.png'},
    {'name': 'resources/Crest/CrestTL2J20_3.png', 'path': 'resources/Crest/CrestTL2J20_3.png'},
    {'name': 'resources/Crest/CrestTL3J20_1.png', 'path': 'resources/Crest/CrestTL3J20_1.png'},
    {'name': 'resources/Crest/CrestTL3J20_2.png', 'path': 'resources/Crest/CrestTL3J20_2.png'},
    {'name': 'resources/Crest/CrestTL3J20_3.png', 'path': 'resources/Crest/CrestTL3J20_3.png'},
    {'name': 'resources/Crest/CrestTL4J20_1.png', 'path': 'resources/Crest/CrestTL4J20_1.png'},
    {'name': 'resources/Crest/CrestTL4J20_2.png', 'path': 'resources/Crest/CrestTL4J20_2.png'},
    {'name': 'resources/Crest/CrestTL4J20_3.png', 'path': 'resources/Crest/CrestTL4J20_3.png'},
    {'name': 'resources/Crest/CrestBR1J20_1.png', 'path': 'resources/Crest/CrestBR1J20_1.png'},
    {'name': 'resources/Crest/CrestBR1J20_2.png', 'path': 'resources/Crest/CrestBR1J20_2.png'},
    {'name': 'resources/Crest/CrestBR1J20_3.png', 'path': 'resources/Crest/CrestBR1J20_3.png'},
    {'name': 'resources/Crest/CrestBR2J20_1.png', 'path': 'resources/Crest/CrestBR2J20_1.png'},
    {'name': 'resources/Crest/CrestBR2J20_2.png', 'path': 'resources/Crest/CrestBR2J20_2.png'},
    {'name': 'resources/Crest/CrestBR2J20_3.png', 'path': 'resources/Crest/CrestBR2J20_3.png'},
    {'name': 'resources/Crest/CrestBR3J20_1.png', 'path': 'resources/Crest/CrestBR3J20_1.png'},
    {'name': 'resources/Crest/CrestBR3J20_2.png', 'path': 'resources/Crest/CrestBR3J20_2.png'},
    {'name': 'resources/Crest/CrestBR3J20_3.png', 'path': 'resources/Crest/CrestBR3J20_3.png'},
    {'name': 'resources/Crest/CrestBR4J20_1.png', 'path': 'resources/Crest/CrestBR4J20_1.png'},
    {'name': 'resources/Line/LineTL1_1.png', 'path': 'resources/Line/LineTL1_1.png'},
    {'name': 'resources/Line/LineTL1_2.png', 'path': 'resources/Line/LineTL1_2.png'},
    {'name': 'resources/Line/LineTL1_3.png', 'path': 'resources/Line/LineTL1_3.png'},
    {'name': 'resources/Line/LineTL2_1.png', 'path': 'resources/Line/LineTL2_1.png'},
    {'name': 'resources/Line/LineTL2_2.png', 'path': 'resources/Line/LineTL2_2.png'},
    {'name': 'resources/Line/LineTL2_3.png', 'path': 'resources/Line/LineTL2_3.png'},
    {'name': 'resources/Line/LineTL3_1.png', 'path': 'resources/Line/LineTL3_1.png'},
    {'name': 'resources/Line/LineTL3_2.png', 'path': 'resources/Line/LineTL3_2.png'},
    {'name': 'resources/Line/LineTL3_3.png', 'path': 'resources/Line/LineTL3_3.png'},
    {'name': 'resources/Line/LineTL4_1.png', 'path': 'resources/Line/LineTL4_1.png'},
    {'name': 'resources/Line/LineTL4_2.png', 'path': 'resources/Line/LineTL4_2.png'},
    {'name': 'resources/Line/LineTL4_3.png', 'path': 'resources/Line/LineTL4_3.png'},
    {'name': 'resources/Line/LineBR1J10_1.png', 'path': 'resources/Line/LineBR1J10_1.png'},
    {'name': 'resources/Line/LineBR1J10_2.png', 'path': 'resources/Line/LineBR1J10_2.png'},
    {'name': 'resources/Line/LineBR1J10_3.png', 'path': 'resources/Line/LineBR1J10_3.png'},
    {'name': 'resources/Line/LineBR2J10_1.png', 'path': 'resources/Line/LineBR2J10_1.png'},
    {'name': 'resources/Line/LineBR2J10_2.png', 'path': 'resources/Line/LineBR2J10_2.png'},
    {'name': 'resources/Line/LineBR2J10_3.png', 'path': 'resources/Line/LineBR2J10_3.png'},
    {'name': 'resources/Line/LineBR3J10_1.png', 'path': 'resources/Line/LineBR3J10_1.png'},
    {'name': 'resources/Line/LineBR3J10_2.png', 'path': 'resources/Line/LineBR3J10_2.png'},
    {'name': 'resources/Line/LineBR3J10_3.png', 'path': 'resources/Line/LineBR3J10_3.png'},
    {'name': 'resources/Line/LineBR4J10_1.png', 'path': 'resources/Line/LineBR4J10_1.png'},
    {'name': 'resources/Line/LineBR4J10_2.png', 'path': 'resources/Line/LineBR4J10_2.png'},
    {'name': 'resources/Line/LineBR4J10_3.png', 'path': 'resources/Line/LineBR4J10_3.png'},
    {'name': 'resources/Line/LineTL1J20_1.png', 'path': 'resources/Line/LineTL1J20_1.png'},
    {'name': 'resources/Line/LineTL1J20_2.png', 'path': 'resources/Line/LineTL1J20_2.png'},
    {'name': 'resources/Line/LineTL1J20_3.png', 'path': 'resources/Line/LineTL1J20_3.png'},
    {'name': 'resources/Line/LineTL2J20_1.png', 'path': 'resources/Line/LineTL2J20_1.png'},
    {'name': 'resources/Line/LineTL2J20_2.png', 'path': 'resources/Line/LineTL2J20_2.png'},
    {'name': 'resources/Line/LineTL2J20_3.png', 'path': 'resources/Line/LineTL2J20_3.png'},
    {'name': 'resources/Line/LineTL3J20_1.png', 'path': 'resources/Line/LineTL3J20_1.png'},
    {'name': 'resources/Line/LineTL3J20_2.png', 'path': 'resources/Line/LineTL3J20_2.png'},
    {'name': 'resources/Line/LineTL3J20_3.png', 'path': 'resources/Line/LineTL3J20_3.png'},
    {'name': 'resources/Line/LineTL4J20_1.png', 'path': 'resources/Line/LineTL4J20_1.png'},
    {'name': 'resources/Line/LineTL4J20_2.png', 'path': 'resources/Line/LineTL4J20_2.png'},
    {'name': 'resources/Line/LineTL4J20_3.png', 'path': 'resources/Line/LineTL4J20_3.png'},
    {'name': 'resources/Line/LineBR1_1.png', 'path': 'resources/Line/LineBR1_1.png'},
    {'name': 'resources/Line/LineBR1_2.png', 'path': 'resources/Line/LineBR1_2.png'},
    {'name': 'resources/Line/LineBR1_3.png', 'path': 'resources/Line/LineBR1_3.png'},
    {'name': 'resources/Line/LineBR2_1.png', 'path': 'resources/Line/LineBR2_1.png'},
    {'name': 'resources/Line/LineBR2_2.png', 'path': 'resources/Line/LineBR2_2.png'},
    {'name': 'resources/Line/LineBR2_3.png', 'path': 'resources/Line/LineBR2_3.png'},
    {'name': 'resources/Line/LineBR3_1.png', 'path': 'resources/Line/LineBR3_1.png'},
    {'name': 'resources/Line/LineBR3_2.png', 'path': 'resources/Line/LineBR3_2.png'},
    {'name': 'resources/Line/LineBR3_3.png', 'path': 'resources/Line/LineBR3_3.png'},
    {'name': 'resources/Line/LineBR4_1.png', 'path': 'resources/Line/LineBR4_1.png'},
    {'name': 'resources/Line/LineBR4_2.png', 'path': 'resources/Line/LineBR4_2.png'},
    {'name': 'resources/Line/LineBR4_3.png', 'path': 'resources/Line/LineBR4_3.png'},
    {'name': 'resources/Line/LineTL1J10_1.png', 'path': 'resources/Line/LineTL1J10_1.png'},
    {'name': 'resources/Line/LineTL1J10_2.png', 'path': 'resources/Line/LineTL1J10_2.png'},
    {'name': 'resources/Line/LineTL1J10_3.png', 'path': 'resources/Line/LineTL1J10_3.png'},
    {'name': 'resources/Line/LineTL2J10_1.png', 'path': 'resources/Line/LineTL2J10_1.png'},
    {'name': 'resources/Line/LineTL2J10_2.png', 'path': 'resources/Line/LineTL2J10_2.png'},
    {'name': 'resources/Line/LineTL2J10_3.png', 'path': 'resources/Line/LineTL2J10_3.png'},
    {'name': 'resources/Line/LineTL3J10_1.png', 'path': 'resources/Line/LineTL3J10_1.png'},
    {'name': 'resources/Line/LineTL3J10_2.png', 'path': 'resources/Line/LineTL3J10_2.png'},
    {'name': 'resources/Line/LineTL3J10_3.png', 'path': 'resources/Line/LineTL3J10_3.png'},
    {'name': 'resources/Line/LineTL4J10_1.png', 'path': 'resources/Line/LineTL4J10_1.png'},
    {'name': 'resources/Line/LineTL4J10_2.png', 'path': 'resources/Line/LineTL4J10_2.png'},
    {'name': 'resources/Line/LineTL4J10_3.png', 'path': 'resources/Line/LineTL4J10_3.png'},
    {'name': 'resources/Line/LineBR1J20_2.png', 'path': 'resources/Line/LineBR1J20_2.png'},
    {'name': 'resources/Line/LineBR1J20_3.png', 'path': 'resources/Line/LineBR1J20_3.png'},
    {'name': 'resources/Line/LineBR2J20_1.png', 'path': 'resources/Line/LineBR2J20_1.png'},
    {'name': 'resources/Line/LineBR2J20_2.png', 'path': 'resources/Line/LineBR2J20_2.png'},
    {'name': 'resources/Line/LineBR2J20_3.png', 'path': 'resources/Line/LineBR2J20_3.png'},
    {'name': 'resources/Line/LineBR3J20_1.png', 'path': 'resources/Line/LineBR3J20_1.png'},
    {'name': 'resources/Line/LineBR3J20_2.png', 'path': 'resources/Line/LineBR3J20_2.png'},
    {'name': 'resources/Line/LineBR3J20_3.png', 'path': 'resources/Line/LineBR3J20_3.png'},
    {'name': 'resources/Line/LineBR4J20_1.png', 'path': 'resources/Line/LineBR4J20_1.png'},
    {'name': 'resources/Line/LineBR4J20_2.png', 'path': 'resources/Line/LineBR4J20_2.png'},
    {'name': 'resources/Line/LineBR4J20_3.png', 'path': 'resources/Line/LineBR4J20_3.png'},
    {'name': 'resources/Shapeless/NoshapeB_1.png', 'path': 'resources/Shapeless/NoshapeB_1.png'},
    {'name': 'resources/Shapeless/NoshapeB_2.png', 'path': 'resources/Shapeless/NoshapeB_2.png'},
    {'name': 'resources/Shapeless/NoshapeB_3.png', 'path': 'resources/Shapeless/NoshapeB_3.png'},
    {'name': 'resources/Shapeless/NoshapeB_4.png', 'path': 'resources/Shapeless/NoshapeB_4.png'},
    {'name': 'resources/Shapeless/NoshapeB_5.png', 'path': 'resources/Shapeless/NoshapeB_5.png'},
    {'name': 'resources/Shapeless/NoshapeB_6.png', 'path': 'resources/Shapeless/NoshapeB_6.png'},
    {'name': 'resources/Shapeless/NoshapeB_7.png', 'path': 'resources/Shapeless/NoshapeB_7.png'},
    {'name': 'resources/Shapeless/NoshapeB_8.png', 'path': 'resources/Shapeless/NoshapeB_8.png'},
    {'name': 'resources/Shapeless/NoshapeB_9.png', 'path': 'resources/Shapeless/NoshapeB_9.png'},
    {'name': 'resources/Shapeless/NoshapeB_10.png', 'path': 'resources/Shapeless/NoshapeB_10.png'},
    {'name': 'resources/Shapeless/NoshapeB_11.png', 'path': 'resources/Shapeless/NoshapeB_11.png'},
    {'name': 'resources/Shapeless/NoshapeB_12.png', 'path': 'resources/Shapeless/NoshapeB_12.png'},
    {'name': 'resources/Shapeless/NoshapeB_13.png', 'path': 'resources/Shapeless/NoshapeB_13.png'},
    {'name': 'resources/Shapeless/NoshapeB_14.png', 'path': 'resources/Shapeless/NoshapeB_14.png'},
    {'name': 'resources/Shapeless/NoshapeB_15.png', 'path': 'resources/Shapeless/NoshapeB_15.png'},
    {'name': 'resources/Shapeless/NoshapeB_16.png', 'path': 'resources/Shapeless/NoshapeB_16.png'},
    {'name': 'resources/Shapeless/NoshapeB_17.png', 'path': 'resources/Shapeless/NoshapeB_17.png'},
    {'name': 'resources/Shapeless/NoshapeB_18.png', 'path': 'resources/Shapeless/NoshapeB_18.png'},
    {'name': 'resources/Shapeless/NoshapeB_19.png', 'path': 'resources/Shapeless/NoshapeB_19.png'},
    {'name': 'resources/Shapeless/NoshapeB_20.png', 'path': 'resources/Shapeless/NoshapeB_20.png'},
    {'name': 'resources/Shapeless/NoshapeB_21.png', 'path': 'resources/Shapeless/NoshapeB_21.png'},
    {'name': 'resources/Shapeless/NoshapeB_22.png', 'path': 'resources/Shapeless/NoshapeB_22.png'},
    {'name': 'resources/Shapeless/NoshapeB_23.png', 'path': 'resources/Shapeless/NoshapeB_23.png'},
    {'name': 'resources/Shapeless/NoshapeB_24.png', 'path': 'resources/Shapeless/NoshapeB_24.png'},
    {'name': 'resources/Shapeless/NoshapeB_25.png', 'path': 'resources/Shapeless/NoshapeB_25.png'},
    {'name': 'resources/Shapeless/NoshapeB_26.png', 'path': 'resources/Shapeless/NoshapeB_26.png'},
    {'name': 'resources/Shapeless/NoshapeB_27.png', 'path': 'resources/Shapeless/NoshapeB_27.png'},
    {'name': 'resources/Shapeless/NoshapeB_28.png', 'path': 'resources/Shapeless/NoshapeB_28.png'},
    {'name': 'resources/Shapeless/NoshapeB_29.png', 'path': 'resources/Shapeless/NoshapeB_29.png'},
    {'name': 'resources/Shapeless/NoshapeB_30.png', 'path': 'resources/Shapeless/NoshapeB_30.png'},
    {'name': 'resources/Shapeless/NoshapeB_31.png', 'path': 'resources/Shapeless/NoshapeB_31.png'},
    {'name': 'resources/Shapeless/NoshapeB_32.png', 'path': 'resources/Shapeless/NoshapeB_32.png'},
    {'name': 'resources/Shapeless/NoshapeB_33.png', 'path': 'resources/Shapeless/NoshapeB_33.png'},
    {'name': 'resources/Shapeless/NoshapeB_34.png', 'path': 'resources/Shapeless/NoshapeB_34.png'},
    {'name': 'resources/Shapeless/NoshapeB_35.png', 'path': 'resources/Shapeless/NoshapeB_35.png'},
    {'name': 'resources/Shapeless/NoshapeB_36.png', 'path': 'resources/Shapeless/NoshapeB_36.png'},
    {'name': 'resources/Shapeless/NoshapeB_37.png', 'path': 'resources/Shapeless/NoshapeB_37.png'},
    {'name': 'resources/Shapeless/NoshapeB_38.png', 'path': 'resources/Shapeless/NoshapeB_38.png'},
    {'name': 'resources/Shapeless/NoshapeB_39.png', 'path': 'resources/Shapeless/NoshapeB_39.png'},
    {'name': 'resources/Shapeless/NoshapeB_40.png', 'path': 'resources/Shapeless/NoshapeB_40.png'},
    {'name': 'resources/Shapeless/NoshapeB_41.png', 'path': 'resources/Shapeless/NoshapeB_41.png'},
    {'name': 'resources/Shapeless/NoshapeB_42.png', 'path': 'resources/Shapeless/NoshapeB_42.png'},
    {'name': 'resources/Shapeless/NoshapeB_43.png', 'path': 'resources/Shapeless/NoshapeB_43.png'},
    {'name': 'resources/Shapeless/NoshapeB_44.png', 'path': 'resources/Shapeless/NoshapeB_44.png'},
    {'name': 'resources/Shapeless/NoshapeB_45.png', 'path': 'resources/Shapeless/NoshapeB_45.png'},
    {'name': 'resources/Shapeless/NoshapeB_46.png', 'path': 'resources/Shapeless/NoshapeB_46.png'},
    {'name': 'resources/Shapeless/NoshapeB_47.png', 'path': 'resources/Shapeless/NoshapeB_47.png'},
    {'name': 'resources/Shapeless/NoshapeB_48.png', 'path': 'resources/Shapeless/NoshapeB_48.png'},
    {'name': 'resources/Shapeless/NoshapeB_49.png', 'path': 'resources/Shapeless/NoshapeB_49.png'},
    {'name': 'resources/Shapeless/NoshapeB_50.png', 'path': 'resources/Shapeless/NoshapeB_50.png'},
    {'name': 'resources/Shapeless/NoshapeB_51.png', 'path': 'resources/Shapeless/NoshapeB_51.png'},
    {'name': 'resources/Shapeless/NoshapeB_52.png', 'path': 'resources/Shapeless/NoshapeB_52.png'},
    {'name': 'resources/Shapeless/NoshapeB_53.png', 'path': 'resources/Shapeless/NoshapeB_53.png'},
    {'name': 'resources/Shapeless/NoshapeB_54.png', 'path': 'resources/Shapeless/NoshapeB_54.png'},
    {'name': 'resources/Shapeless/NoshapeB_55.png', 'path': 'resources/Shapeless/NoshapeB_55.png'},
    {'name': 'resources/Shapeless/NoshapeB_56.png', 'path': 'resources/Shapeless/NoshapeB_56.png'},
    {'name': 'resources/Shapeless/NoshapeB_57.png', 'path': 'resources/Shapeless/NoshapeB_57.png'},
    {'name': 'resources/Shapeless/NoshapeB_58.png', 'path': 'resources/Shapeless/NoshapeB_58.png'},
    {'name': 'resources/Shapeless/NoshapeB_59.png', 'path': 'resources/Shapeless/NoshapeB_59.png'},
    {'name': 'resources/Shapeless/NoshapeB_60.png', 'path': 'resources/Shapeless/NoshapeB_60.png'},
    {'name': 'resources/Shapeless/NoshapeB_61.png', 'path': 'resources/Shapeless/NoshapeB_61.png'},
    {'name': 'resources/Shapeless/NoshapeB_62.png', 'path': 'resources/Shapeless/NoshapeB_62.png'},
    {'name': 'resources/Shapeless/NoshapeB_63.png', 'path': 'resources/Shapeless/NoshapeB_63.png'},
    {'name': 'resources/Shapeless/NoshapeB_64.png', 'path': 'resources/Shapeless/NoshapeB_64.png'},
    {'name': 'resources/Shapeless/NoshapeB_65.png', 'path': 'resources/Shapeless/NoshapeB_65.png'},
    {'name': 'resources/Shapeless/NoshapeB_66.png', 'path': 'resources/Shapeless/NoshapeB_66.png'},
    {'name': 'resources/Shapeless/NoshapeB_67.png', 'path': 'resources/Shapeless/NoshapeB_67.png'},
    {'name': 'resources/Shapeless/NoshapeB_68.png', 'path': 'resources/Shapeless/NoshapeB_68.png'},
    {'name': 'resources/Shapeless/NoshapeB_69.png', 'path': 'resources/Shapeless/NoshapeB_69.png'},
    {'name': 'resources/Shapeless/NoshapeB_70.png', 'path': 'resources/Shapeless/NoshapeB_70.png'},
    {'name': 'resources/Shapeless/NoshapeB_71.png', 'path': 'resources/Shapeless/NoshapeB_71.png'},
    {'name': 'resources/Shapeless/NoshapeB_72.png', 'path': 'resources/Shapeless/NoshapeB_72.png'},
    {'name': 'resources/Shapeless/NoshapeB_73.png', 'path': 'resources/Shapeless/NoshapeB_73.png'},
    {'name': 'resources/Shapeless/NoshapeB_74.png', 'path': 'resources/Shapeless/NoshapeB_74.png'},
    {'name': 'resources/Shapeless/NoshapeB_75.png', 'path': 'resources/Shapeless/NoshapeB_75.png'},
    {'name': 'resources/Shapeless/NoshapeB_76.png', 'path': 'resources/Shapeless/NoshapeB_76.png'},
    {'name': 'resources/Shapeless/NoshapeB_77.png', 'path': 'resources/Shapeless/NoshapeB_77.png'},
    {'name': 'resources/Shapeless/NoshapeB_78.png', 'path': 'resources/Shapeless/NoshapeB_78.png'},
    {'name': 'resources/Shapeless/NoshapeB_79.png', 'path': 'resources/Shapeless/NoshapeB_79.png'},
    {'name': 'resources/Shapeless/NoshapeB_80.png', 'path': 'resources/Shapeless/NoshapeB_80.png'},
    {'name': 'resources/Shapeless/NoshapeB_81.png', 'path': 'resources/Shapeless/NoshapeB_81.png'},
    {'name': 'resources/Shapeless/NoshapeB_82.png', 'path': 'resources/Shapeless/NoshapeB_82.png'},
    {'name': 'resources/Shapeless/NoshapeB_83.png', 'path': 'resources/Shapeless/NoshapeB_83.png'},
    {'name': 'resources/Shapeless/NoshapeB_84.png', 'path': 'resources/Shapeless/NoshapeB_84.png'},
    {'name': 'resources/Shapeless/NoshapeB_85.png', 'path': 'resources/Shapeless/NoshapeB_85.png'},
    {'name': 'resources/Shapeless/NoshapeB_86.png', 'path': 'resources/Shapeless/NoshapeB_86.png'},
    {'name': 'resources/Shapeless/NoshapeB_87.png', 'path': 'resources/Shapeless/NoshapeB_87.png'},
    {'name': 'resources/Shapeless/NoshapeB_88.png', 'path': 'resources/Shapeless/NoshapeB_88.png'},
    {'name': 'resources/Shapeless/NoshapeB_89.png', 'path': 'resources/Shapeless/NoshapeB_89.png'},
    {'name': 'resources/Shapeless/NoshapeB_90.png', 'path': 'resources/Shapeless/NoshapeB_90.png'},
    {'name': 'resources/Shapeless/NoshapeB_91.png', 'path': 'resources/Shapeless/NoshapeB_91.png'},
    {'name': 'resources/Shapeless/NoshapeB_92.png', 'path': 'resources/Shapeless/NoshapeB_92.png'},
    {'name': 'resources/Shapeless/NoshapeB_93.png', 'path': 'resources/Shapeless/NoshapeB_93.png'},
    {'name': 'resources/Shapeless/NoshapeB_94.png', 'path': 'resources/Shapeless/NoshapeB_94.png'},
    {'name': 'resources/Shapeless/NoshapeB_95.png', 'path': 'resources/Shapeless/NoshapeB_95.png'},
    {'name': 'resources/Shapeless/NoshapeB_96.png', 'path': 'resources/Shapeless/NoshapeB_96.png'},
    {'name': 'resources/Shapeless/NoshapeB_97.png', 'path': 'resources/Shapeless/NoshapeB_97.png'},
    {'name': 'resources/Shapeless/NoshapeB_98.png', 'path': 'resources/Shapeless/NoshapeB_98.png'},
    {'name': 'resources/Shapeless/NoshapeB_99.png', 'path': 'resources/Shapeless/NoshapeB_99.png'},
    {'name': 'resources/Shapeless/NoshapeB_100.png', 'path': 'resources/Shapeless/NoshapeB_100.png'},
    {'name': 'resources/Shapeless/NoshapeB_101.png', 'path': 'resources/Shapeless/NoshapeB_101.png'},
    {'name': 'resources/Shapeless/NoshapeB_102.png', 'path': 'resources/Shapeless/NoshapeB_102.png'},
    {'name': 'resources/Shapeless/NoshapeB_103.png', 'path': 'resources/Shapeless/NoshapeB_103.png'},
    {'name': 'resources/Shapeless/NoshapeB_104.png', 'path': 'resources/Shapeless/NoshapeB_104.png'},
    {'name': 'resources/Shapeless/NoshapeB_105.png', 'path': 'resources/Shapeless/NoshapeB_105.png'},
    {'name': 'resources/Shapeless/NoshapeB_106.png', 'path': 'resources/Shapeless/NoshapeB_106.png'},
    {'name': 'resources/Shapeless/NoshapeB_107.png', 'path': 'resources/Shapeless/NoshapeB_107.png'},
    {'name': 'resources/Shapeless/NoshapeB_108.png', 'path': 'resources/Shapeless/NoshapeB_108.png'},
    {'name': 'resources/Shapeless/NoshapeB_109.png', 'path': 'resources/Shapeless/NoshapeB_109.png'},
    {'name': 'resources/Shapeless/NoshapeB_110.png', 'path': 'resources/Shapeless/NoshapeB_110.png'},
    {'name': 'resources/Shapeless/NoshapeB_111.png', 'path': 'resources/Shapeless/NoshapeB_111.png'},
    {'name': 'resources/Shapeless/NoshapeB_112.png', 'path': 'resources/Shapeless/NoshapeB_112.png'},
    {'name': 'resources/Shapeless/NoshapeB_113.png', 'path': 'resources/Shapeless/NoshapeB_113.png'},
    {'name': 'resources/Shapeless/NoshapeB_114.png', 'path': 'resources/Shapeless/NoshapeB_114.png'},
    {'name': 'resources/Shapeless/NoshapeB_115.png', 'path': 'resources/Shapeless/NoshapeB_115.png'},
    {'name': 'resources/Shapeless/NoshapeB_116.png', 'path': 'resources/Shapeless/NoshapeB_116.png'},
    {'name': 'resources/Shapeless/NoshapeB_117.png', 'path': 'resources/Shapeless/NoshapeB_117.png'},
    {'name': 'resources/Shapeless/NoshapeB_118.png', 'path': 'resources/Shapeless/NoshapeB_118.png'},
    {'name': 'resources/Shapeless/NoshapeB_119.png', 'path': 'resources/Shapeless/NoshapeB_119.png'},
    {'name': 'resources/Shapeless/NoshapeB_120.png', 'path': 'resources/Shapeless/NoshapeB_120.png'},
    {'name': 'resources/Shapeless/NoshapeB_121.png', 'path': 'resources/Shapeless/NoshapeB_121.png'},
    {'name': 'resources/Shapeless/NoshapeB_122.png', 'path': 'resources/Shapeless/NoshapeB_122.png'},
    {'name': 'resources/Shapeless/NoshapeB_123.png', 'path': 'resources/Shapeless/NoshapeB_123.png'},
    {'name': 'resources/Shapeless/NoshapeB_124.png', 'path': 'resources/Shapeless/NoshapeB_124.png'},
    {'name': 'resources/Shapeless/NoshapeB_125.png', 'path': 'resources/Shapeless/NoshapeB_125.png'},
    {'name': 'resources/Shapeless/NoshapeB_126.png', 'path': 'resources/Shapeless/NoshapeB_126.png'},
    {'name': 'resources/Shapeless/NoshapeB_127.png', 'path': 'resources/Shapeless/NoshapeB_127.png'},
    {'name': 'resources/Shapeless/NoshapeB_128.png', 'path': 'resources/Shapeless/NoshapeB_128.png'},
    {'name': 'resources/Shapeless/NoshapeB_129.png', 'path': 'resources/Shapeless/NoshapeB_129.png'},
    {'name': 'resources/Shapeless/NoshapeB_130.png', 'path': 'resources/Shapeless/NoshapeB_130.png'},
    {'name': 'resources/Shapeless/NoshapeB_131.png', 'path': 'resources/Shapeless/NoshapeB_131.png'},
    {'name': 'resources/Shapeless/NoshapeB_132.png', 'path': 'resources/Shapeless/NoshapeB_132.png'},
    {'name': 'resources/Shapeless/NoshapeB_133.png', 'path': 'resources/Shapeless/NoshapeB_133.png'},
    {'name': 'resources/Shapeless/NoshapeB_134.png', 'path': 'resources/Shapeless/NoshapeB_134.png'},
    {'name': 'resources/Shapeless/NoshapeB_135.png', 'path': 'resources/Shapeless/NoshapeB_135.png'},
    {'name': 'resources/Shapeless/NoshapeB_136.png', 'path': 'resources/Shapeless/NoshapeB_136.png'},
    {'name': 'resources/Shapeless/NoshapeB_137.png', 'path': 'resources/Shapeless/NoshapeB_137.png'},
    {'name': 'resources/Shapeless/NoshapeB_138.png', 'path': 'resources/Shapeless/NoshapeB_138.png'},
    {'name': 'resources/Shapeless/NoshapeB_139.png', 'path': 'resources/Shapeless/NoshapeB_139.png'},
    {'name': 'resources/Shapeless/NoshapeB_140.png', 'path': 'resources/Shapeless/NoshapeB_140.png'},
    {'name': 'resources/Shapeless/NoshapeB_141.png', 'path': 'resources/Shapeless/NoshapeB_141.png'},
    {'name': 'resources/Shapeless/NoshapeB_142.png', 'path': 'resources/Shapeless/NoshapeB_142.png'},
    {'name': 'resources/Shapeless/NoshapeB_143.png', 'path': 'resources/Shapeless/NoshapeB_143.png'},
    {'name': 'resources/Shapeless/NoshapeB_144.png', 'path': 'resources/Shapeless/NoshapeB_144.png'},
    {'name': 'Block1CrestLineTLBR_2.xlsx', 'path': 'Block1CrestLineTLBR_2.xlsx'},
    {'name': 'resources/Crest/CrestTL1_4.png', 'path': 'resources/Crest/CrestTL1_4.png'},
    {'name': 'resources/Crest/CrestTL1_5.png', 'path': 'resources/Crest/CrestTL1_5.png'},
    {'name': 'resources/Crest/CrestTL1_6.png', 'path': 'resources/Crest/CrestTL1_6.png'},
    {'name': 'resources/Crest/CrestTL2_4.png', 'path': 'resources/Crest/CrestTL2_4.png'},
    {'name': 'resources/Crest/CrestTL2_5.png', 'path': 'resources/Crest/CrestTL2_5.png'},
    {'name': 'resources/Crest/CrestTL2_6.png', 'path': 'resources/Crest/CrestTL2_6.png'},
    {'name': 'resources/Crest/CrestTL3_4.png', 'path': 'resources/Crest/CrestTL3_4.png'},
    {'name': 'resources/Crest/CrestTL3_5.png', 'path': 'resources/Crest/CrestTL3_5.png'},
    {'name': 'resources/Crest/CrestTL3_6.png', 'path': 'resources/Crest/CrestTL3_6.png'},
    {'name': 'resources/Crest/CrestTL4_4.png', 'path': 'resources/Crest/CrestTL4_4.png'},
    {'name': 'resources/Crest/CrestTL4_5.png', 'path': 'resources/Crest/CrestTL4_5.png'},
    {'name': 'resources/Crest/CrestTL4_6.png', 'path': 'resources/Crest/CrestTL4_6.png'},
    {'name': 'resources/Crest/CrestBR1_4.png', 'path': 'resources/Crest/CrestBR1_4.png'},
    {'name': 'resources/Crest/CrestBR1_5.png', 'path': 'resources/Crest/CrestBR1_5.png'},
    {'name': 'resources/Crest/CrestBR1_6.png', 'path': 'resources/Crest/CrestBR1_6.png'},
    {'name': 'resources/Crest/CrestBR2_4.png', 'path': 'resources/Crest/CrestBR2_4.png'},
    {'name': 'resources/Crest/CrestBR2_5.png', 'path': 'resources/Crest/CrestBR2_5.png'},
    {'name': 'resources/Crest/CrestBR2_6.png', 'path': 'resources/Crest/CrestBR2_6.png'},
    {'name': 'resources/Crest/CrestBR3_4.png', 'path': 'resources/Crest/CrestBR3_4.png'},
    {'name': 'resources/Crest/CrestBR3_5.png', 'path': 'resources/Crest/CrestBR3_5.png'},
    {'name': 'resources/Crest/CrestBR3_6.png', 'path': 'resources/Crest/CrestBR3_6.png'},
    {'name': 'resources/Crest/CrestBR4_4.png', 'path': 'resources/Crest/CrestBR4_4.png'},
    {'name': 'resources/Crest/CrestBR4_5.png', 'path': 'resources/Crest/CrestBR4_5.png'},
    {'name': 'resources/Crest/CrestBR4_6.png', 'path': 'resources/Crest/CrestBR4_6.png'},
    {'name': 'resources/Crest/CrestTL1J10_4.png', 'path': 'resources/Crest/CrestTL1J10_4.png'},
    {'name': 'resources/Crest/CrestTL1J10_5.png', 'path': 'resources/Crest/CrestTL1J10_5.png'},
    {'name': 'resources/Crest/CrestTL1J10_6.png', 'path': 'resources/Crest/CrestTL1J10_6.png'},
    {'name': 'resources/Crest/CrestTL2J10_4.png', 'path': 'resources/Crest/CrestTL2J10_4.png'},
    {'name': 'resources/Crest/CrestTL2J10_5.png', 'path': 'resources/Crest/CrestTL2J10_5.png'},
    {'name': 'resources/Crest/CrestTL2J10_6.png', 'path': 'resources/Crest/CrestTL2J10_6.png'},
    {'name': 'resources/Crest/CrestTL3J10_4.png', 'path': 'resources/Crest/CrestTL3J10_4.png'},
    {'name': 'resources/Crest/CrestTL3J10_5.png', 'path': 'resources/Crest/CrestTL3J10_5.png'},
    {'name': 'resources/Crest/CrestTL3J10_6.png', 'path': 'resources/Crest/CrestTL3J10_6.png'},
    {'name': 'resources/Crest/CrestTL4J10_4.png', 'path': 'resources/Crest/CrestTL4J10_4.png'},
    {'name': 'resources/Crest/CrestTL4J10_5.png', 'path': 'resources/Crest/CrestTL4J10_5.png'},
    {'name': 'resources/Crest/CrestTL4J10_6.png', 'path': 'resources/Crest/CrestTL4J10_6.png'},
    {'name': 'resources/Crest/CrestBR1J10_4.png', 'path': 'resources/Crest/CrestBR1J10_4.png'},
    {'name': 'resources/Crest/CrestBR1J10_5.png', 'path': 'resources/Crest/CrestBR1J10_5.png'},
    {'name': 'resources/Crest/CrestBR1J10_6.png', 'path': 'resources/Crest/CrestBR1J10_6.png'},
    {'name': 'resources/Crest/CrestBR2J10_4.png', 'path': 'resources/Crest/CrestBR2J10_4.png'},
    {'name': 'resources/Crest/CrestBR2J10_5.png', 'path': 'resources/Crest/CrestBR2J10_5.png'},
    {'name': 'resources/Crest/CrestBR2J10_6.png', 'path': 'resources/Crest/CrestBR2J10_6.png'},
    {'name': 'resources/Crest/CrestBR3J10_4.png', 'path': 'resources/Crest/CrestBR3J10_4.png'},
    {'name': 'resources/Crest/CrestBR3J10_5.png', 'path': 'resources/Crest/CrestBR3J10_5.png'},
    {'name': 'resources/Crest/CrestBR3J10_6.png', 'path': 'resources/Crest/CrestBR3J10_6.png'},
    {'name': 'resources/Crest/CrestBR4J10_4.png', 'path': 'resources/Crest/CrestBR4J10_4.png'},
    {'name': 'resources/Crest/CrestBR4J10_5.png', 'path': 'resources/Crest/CrestBR4J10_5.png'},
    {'name': 'resources/Crest/CrestBR4J10_6.png', 'path': 'resources/Crest/CrestBR4J10_6.png'},
    {'name': 'resources/Crest/CrestTL1J20_4.png', 'path': 'resources/Crest/CrestTL1J20_4.png'},
    {'name': 'resources/Crest/CrestTL1J20_5.png', 'path': 'resources/Crest/CrestTL1J20_5.png'},
    {'name': 'resources/Crest/CrestTL1J20_6.png', 'path': 'resources/Crest/CrestTL1J20_6.png'},
    {'name': 'resources/Crest/CrestTL2J20_4.png', 'path': 'resources/Crest/CrestTL2J20_4.png'},
    {'name': 'resources/Crest/CrestTL2J20_5.png', 'path': 'resources/Crest/CrestTL2J20_5.png'},
    {'name': 'resources/Crest/CrestTL2J20_6.png', 'path': 'resources/Crest/CrestTL2J20_6.png'},
    {'name': 'resources/Crest/CrestTL3J20_4.png', 'path': 'resources/Crest/CrestTL3J20_4.png'},
    {'name': 'resources/Crest/CrestTL3J20_5.png', 'path': 'resources/Crest/CrestTL3J20_5.png'},
    {'name': 'resources/Crest/CrestTL3J20_6.png', 'path': 'resources/Crest/CrestTL3J20_6.png'},
    {'name': 'resources/Crest/CrestTL4J20_4.png', 'path': 'resources/Crest/CrestTL4J20_4.png'},
    {'name': 'resources/Crest/CrestTL4J20_5.png', 'path': 'resources/Crest/CrestTL4J20_5.png'},
    {'name': 'resources/Crest/CrestTL4J20_6.png', 'path': 'resources/Crest/CrestTL4J20_6.png'},
    {'name': 'resources/Crest/CrestBR1J20_4.png', 'path': 'resources/Crest/CrestBR1J20_4.png'},
    {'name': 'resources/Crest/CrestBR1J20_5.png', 'path': 'resources/Crest/CrestBR1J20_5.png'},
    {'name': 'resources/Crest/CrestBR1J20_6.png', 'path': 'resources/Crest/CrestBR1J20_6.png'},
    {'name': 'resources/Crest/CrestBR2J20_4.png', 'path': 'resources/Crest/CrestBR2J20_4.png'},
    {'name': 'resources/Crest/CrestBR2J20_5.png', 'path': 'resources/Crest/CrestBR2J20_5.png'},
    {'name': 'resources/Crest/CrestBR2J20_6.png', 'path': 'resources/Crest/CrestBR2J20_6.png'},
    {'name': 'resources/Crest/CrestBR3J20_4.png', 'path': 'resources/Crest/CrestBR3J20_4.png'},
    {'name': 'resources/Crest/CrestBR3J20_5.png', 'path': 'resources/Crest/CrestBR3J20_5.png'},
    {'name': 'resources/Crest/CrestBR3J20_6.png', 'path': 'resources/Crest/CrestBR3J20_6.png'},
    {'name': 'resources/Crest/CrestBR4J20_4.png', 'path': 'resources/Crest/CrestBR4J20_4.png'},
    {'name': 'resources/Crest/CrestBR4J20_5.png', 'path': 'resources/Crest/CrestBR4J20_5.png'},
    {'name': 'resources/Crest/CrestBR4J20_6.png', 'path': 'resources/Crest/CrestBR4J20_6.png'},
    {'name': 'resources/Line/LineTL1_4.png', 'path': 'resources/Line/LineTL1_4.png'},
    {'name': 'resources/Line/LineTL1_5.png', 'path': 'resources/Line/LineTL1_5.png'},
    {'name': 'resources/Line/LineTL1_6.png', 'path': 'resources/Line/LineTL1_6.png'},
    {'name': 'resources/Line/LineTL2_4.png', 'path': 'resources/Line/LineTL2_4.png'},
    {'name': 'resources/Line/LineTL2_5.png', 'path': 'resources/Line/LineTL2_5.png'},
    {'name': 'resources/Line/LineTL2_6.png', 'path': 'resources/Line/LineTL2_6.png'},
    {'name': 'resources/Line/LineTL3_4.png', 'path': 'resources/Line/LineTL3_4.png'},
    {'name': 'resources/Line/LineTL3_5.png', 'path': 'resources/Line/LineTL3_5.png'},
    {'name': 'resources/Line/LineTL3_6.png', 'path': 'resources/Line/LineTL3_6.png'},
    {'name': 'resources/Line/LineTL4_4.png', 'path': 'resources/Line/LineTL4_4.png'},
    {'name': 'resources/Line/LineTL4_5.png', 'path': 'resources/Line/LineTL4_5.png'},
    {'name': 'resources/Line/LineTL4_6.png', 'path': 'resources/Line/LineTL4_6.png'},
    {'name': 'resources/Line/LineBR1J10_4.png', 'path': 'resources/Line/LineBR1J10_4.png'},
    {'name': 'resources/Line/LineBR1J10_5.png', 'path': 'resources/Line/LineBR1J10_5.png'},
    {'name': 'resources/Line/LineBR1J10_6.png', 'path': 'resources/Line/LineBR1J10_6.png'},
    {'name': 'resources/Line/LineBR2J10_4.png', 'path': 'resources/Line/LineBR2J10_4.png'},
    {'name': 'resources/Line/LineBR2J10_5.png', 'path': 'resources/Line/LineBR2J10_5.png'},
    {'name': 'resources/Line/LineBR2J10_6.png', 'path': 'resources/Line/LineBR2J10_6.png'},
    {'name': 'resources/Line/LineBR3J10_4.png', 'path': 'resources/Line/LineBR3J10_4.png'},
    {'name': 'resources/Line/LineBR3J10_5.png', 'path': 'resources/Line/LineBR3J10_5.png'},
    {'name': 'resources/Line/LineBR3J10_6.png', 'path': 'resources/Line/LineBR3J10_6.png'},
    {'name': 'resources/Line/LineBR4J10_4.png', 'path': 'resources/Line/LineBR4J10_4.png'},
    {'name': 'resources/Line/LineBR4J10_5.png', 'path': 'resources/Line/LineBR4J10_5.png'},
    {'name': 'resources/Line/LineBR4J10_6.png', 'path': 'resources/Line/LineBR4J10_6.png'},
    {'name': 'resources/Line/LineTL1J20_4.png', 'path': 'resources/Line/LineTL1J20_4.png'},
    {'name': 'resources/Line/LineTL1J20_5.png', 'path': 'resources/Line/LineTL1J20_5.png'},
    {'name': 'resources/Line/LineTL1J20_6.png', 'path': 'resources/Line/LineTL1J20_6.png'},
    {'name': 'resources/Line/LineTL2J20_4.png', 'path': 'resources/Line/LineTL2J20_4.png'},
    {'name': 'resources/Line/LineTL2J20_5.png', 'path': 'resources/Line/LineTL2J20_5.png'},
    {'name': 'resources/Line/LineTL2J20_6.png', 'path': 'resources/Line/LineTL2J20_6.png'},
    {'name': 'resources/Line/LineTL3J20_4.png', 'path': 'resources/Line/LineTL3J20_4.png'},
    {'name': 'resources/Line/LineTL3J20_5.png', 'path': 'resources/Line/LineTL3J20_5.png'},
    {'name': 'resources/Line/LineTL3J20_6.png', 'path': 'resources/Line/LineTL3J20_6.png'},
    {'name': 'resources/Line/LineTL4J20_4.png', 'path': 'resources/Line/LineTL4J20_4.png'},
    {'name': 'resources/Line/LineTL4J20_5.png', 'path': 'resources/Line/LineTL4J20_5.png'},
    {'name': 'resources/Line/LineTL4J20_6.png', 'path': 'resources/Line/LineTL4J20_6.png'},
    {'name': 'resources/Line/LineBR1_4.png', 'path': 'resources/Line/LineBR1_4.png'},
    {'name': 'resources/Line/LineBR1_5.png', 'path': 'resources/Line/LineBR1_5.png'},
    {'name': 'resources/Line/LineBR1_6.png', 'path': 'resources/Line/LineBR1_6.png'},
    {'name': 'resources/Line/LineBR2_4.png', 'path': 'resources/Line/LineBR2_4.png'},
    {'name': 'resources/Line/LineBR2_5.png', 'path': 'resources/Line/LineBR2_5.png'},
    {'name': 'resources/Line/LineBR2_6.png', 'path': 'resources/Line/LineBR2_6.png'},
    {'name': 'resources/Line/LineBR3_4.png', 'path': 'resources/Line/LineBR3_4.png'},
    {'name': 'resources/Line/LineBR3_5.png', 'path': 'resources/Line/LineBR3_5.png'},
    {'name': 'resources/Line/LineBR3_6.png', 'path': 'resources/Line/LineBR3_6.png'},
    {'name': 'resources/Line/LineBR4_4.png', 'path': 'resources/Line/LineBR4_4.png'},
    {'name': 'resources/Line/LineBR4_5.png', 'path': 'resources/Line/LineBR4_5.png'},
    {'name': 'resources/Line/LineBR4_6.png', 'path': 'resources/Line/LineBR4_6.png'},
    {'name': 'resources/Line/LineTL1J10_4.png', 'path': 'resources/Line/LineTL1J10_4.png'},
    {'name': 'resources/Line/LineTL1J10_5.png', 'path': 'resources/Line/LineTL1J10_5.png'},
    {'name': 'resources/Line/LineTL1J10_6.png', 'path': 'resources/Line/LineTL1J10_6.png'},
    {'name': 'resources/Line/LineTL2J10_4.png', 'path': 'resources/Line/LineTL2J10_4.png'},
    {'name': 'resources/Line/LineTL2J10_5.png', 'path': 'resources/Line/LineTL2J10_5.png'},
    {'name': 'resources/Line/LineTL2J10_6.png', 'path': 'resources/Line/LineTL2J10_6.png'},
    {'name': 'resources/Line/LineTL3J10_4.png', 'path': 'resources/Line/LineTL3J10_4.png'},
    {'name': 'resources/Line/LineTL3J10_5.png', 'path': 'resources/Line/LineTL3J10_5.png'},
    {'name': 'resources/Line/LineTL3J10_6.png', 'path': 'resources/Line/LineTL3J10_6.png'},
    {'name': 'resources/Line/LineTL4J10_4.png', 'path': 'resources/Line/LineTL4J10_4.png'},
    {'name': 'resources/Line/LineTL4J10_5.png', 'path': 'resources/Line/LineTL4J10_5.png'},
    {'name': 'resources/Line/LineTL4J10_6.png', 'path': 'resources/Line/LineTL4J10_6.png'},
    {'name': 'resources/Line/LineBR1J20_5.png', 'path': 'resources/Line/LineBR1J20_5.png'},
    {'name': 'resources/Line/LineBR1J20_6.png', 'path': 'resources/Line/LineBR1J20_6.png'},
    {'name': 'resources/Line/LineBR2J20_4.png', 'path': 'resources/Line/LineBR2J20_4.png'},
    {'name': 'resources/Line/LineBR2J20_5.png', 'path': 'resources/Line/LineBR2J20_5.png'},
    {'name': 'resources/Line/LineBR2J20_6.png', 'path': 'resources/Line/LineBR2J20_6.png'},
    {'name': 'resources/Line/LineBR3J20_4.png', 'path': 'resources/Line/LineBR3J20_4.png'},
    {'name': 'resources/Line/LineBR3J20_5.png', 'path': 'resources/Line/LineBR3J20_5.png'},
    {'name': 'resources/Line/LineBR3J20_6.png', 'path': 'resources/Line/LineBR3J20_6.png'},
    {'name': 'resources/Line/LineBR4J20_4.png', 'path': 'resources/Line/LineBR4J20_4.png'},
    {'name': 'resources/Line/LineBR4J20_5.png', 'path': 'resources/Line/LineBR4J20_5.png'},
    {'name': 'resources/Line/LineBR4J20_6.png', 'path': 'resources/Line/LineBR4J20_6.png'},
    {'name': 'resources/Shapeless/NoshapeB_145.png', 'path': 'resources/Shapeless/NoshapeB_145.png'},
    {'name': 'resources/Shapeless/NoshapeB_146.png', 'path': 'resources/Shapeless/NoshapeB_146.png'},
    {'name': 'resources/Shapeless/NoshapeB_147.png', 'path': 'resources/Shapeless/NoshapeB_147.png'},
    {'name': 'resources/Shapeless/NoshapeB_148.png', 'path': 'resources/Shapeless/NoshapeB_148.png'},
    {'name': 'resources/Shapeless/NoshapeB_149.png', 'path': 'resources/Shapeless/NoshapeB_149.png'},
    {'name': 'resources/Shapeless/NoshapeB_150.png', 'path': 'resources/Shapeless/NoshapeB_150.png'},
    {'name': 'resources/Shapeless/NoshapeB_151.png', 'path': 'resources/Shapeless/NoshapeB_151.png'},
    {'name': 'resources/Shapeless/NoshapeB_152.png', 'path': 'resources/Shapeless/NoshapeB_152.png'},
    {'name': 'resources/Shapeless/NoshapeB_153.png', 'path': 'resources/Shapeless/NoshapeB_153.png'},
    {'name': 'resources/Shapeless/NoshapeB_154.png', 'path': 'resources/Shapeless/NoshapeB_154.png'},
    {'name': 'resources/Shapeless/NoshapeB_155.png', 'path': 'resources/Shapeless/NoshapeB_155.png'},
    {'name': 'resources/Shapeless/NoshapeB_156.png', 'path': 'resources/Shapeless/NoshapeB_156.png'},
    {'name': 'resources/Shapeless/NoshapeB_157.png', 'path': 'resources/Shapeless/NoshapeB_157.png'},
    {'name': 'resources/Shapeless/NoshapeB_158.png', 'path': 'resources/Shapeless/NoshapeB_158.png'},
    {'name': 'resources/Shapeless/NoshapeB_159.png', 'path': 'resources/Shapeless/NoshapeB_159.png'},
    {'name': 'resources/Shapeless/NoshapeB_160.png', 'path': 'resources/Shapeless/NoshapeB_160.png'},
    {'name': 'resources/Shapeless/NoshapeB_161.png', 'path': 'resources/Shapeless/NoshapeB_161.png'},
    {'name': 'resources/Shapeless/NoshapeB_162.png', 'path': 'resources/Shapeless/NoshapeB_162.png'},
    {'name': 'resources/Shapeless/NoshapeB_163.png', 'path': 'resources/Shapeless/NoshapeB_163.png'},
    {'name': 'resources/Shapeless/NoshapeB_164.png', 'path': 'resources/Shapeless/NoshapeB_164.png'},
    {'name': 'resources/Shapeless/NoshapeB_165.png', 'path': 'resources/Shapeless/NoshapeB_165.png'},
    {'name': 'resources/Shapeless/NoshapeB_166.png', 'path': 'resources/Shapeless/NoshapeB_166.png'},
    {'name': 'resources/Shapeless/NoshapeB_167.png', 'path': 'resources/Shapeless/NoshapeB_167.png'},
    {'name': 'resources/Shapeless/NoshapeB_168.png', 'path': 'resources/Shapeless/NoshapeB_168.png'},
    {'name': 'resources/Shapeless/NoshapeB_169.png', 'path': 'resources/Shapeless/NoshapeB_169.png'},
    {'name': 'resources/Shapeless/NoshapeB_170.png', 'path': 'resources/Shapeless/NoshapeB_170.png'},
    {'name': 'resources/Shapeless/NoshapeB_171.png', 'path': 'resources/Shapeless/NoshapeB_171.png'},
    {'name': 'resources/Shapeless/NoshapeB_172.png', 'path': 'resources/Shapeless/NoshapeB_172.png'},
    {'name': 'resources/Shapeless/NoshapeB_173.png', 'path': 'resources/Shapeless/NoshapeB_173.png'},
    {'name': 'resources/Shapeless/NoshapeB_174.png', 'path': 'resources/Shapeless/NoshapeB_174.png'},
    {'name': 'resources/Shapeless/NoshapeB_175.png', 'path': 'resources/Shapeless/NoshapeB_175.png'},
    {'name': 'resources/Shapeless/NoshapeB_176.png', 'path': 'resources/Shapeless/NoshapeB_176.png'},
    {'name': 'resources/Shapeless/NoshapeB_177.png', 'path': 'resources/Shapeless/NoshapeB_177.png'},
    {'name': 'resources/Shapeless/NoshapeB_178.png', 'path': 'resources/Shapeless/NoshapeB_178.png'},
    {'name': 'resources/Shapeless/NoshapeB_179.png', 'path': 'resources/Shapeless/NoshapeB_179.png'},
    {'name': 'resources/Shapeless/NoshapeB_180.png', 'path': 'resources/Shapeless/NoshapeB_180.png'},
    {'name': 'resources/Shapeless/NoshapeB_181.png', 'path': 'resources/Shapeless/NoshapeB_181.png'},
    {'name': 'resources/Shapeless/NoshapeB_182.png', 'path': 'resources/Shapeless/NoshapeB_182.png'},
    {'name': 'resources/Shapeless/NoshapeB_183.png', 'path': 'resources/Shapeless/NoshapeB_183.png'},
    {'name': 'resources/Shapeless/NoshapeB_184.png', 'path': 'resources/Shapeless/NoshapeB_184.png'},
    {'name': 'resources/Shapeless/NoshapeB_185.png', 'path': 'resources/Shapeless/NoshapeB_185.png'},
    {'name': 'resources/Shapeless/NoshapeB_186.png', 'path': 'resources/Shapeless/NoshapeB_186.png'},
    {'name': 'resources/Shapeless/NoshapeB_187.png', 'path': 'resources/Shapeless/NoshapeB_187.png'},
    {'name': 'resources/Shapeless/NoshapeB_188.png', 'path': 'resources/Shapeless/NoshapeB_188.png'},
    {'name': 'resources/Shapeless/NoshapeB_189.png', 'path': 'resources/Shapeless/NoshapeB_189.png'},
    {'name': 'resources/Shapeless/NoshapeB_190.png', 'path': 'resources/Shapeless/NoshapeB_190.png'},
    {'name': 'resources/Shapeless/NoshapeB_191.png', 'path': 'resources/Shapeless/NoshapeB_191.png'},
    {'name': 'resources/Shapeless/NoshapeB_192.png', 'path': 'resources/Shapeless/NoshapeB_192.png'},
    {'name': 'resources/Shapeless/NoshapeB_193.png', 'path': 'resources/Shapeless/NoshapeB_193.png'},
    {'name': 'resources/Shapeless/NoshapeB_194.png', 'path': 'resources/Shapeless/NoshapeB_194.png'},
    {'name': 'resources/Shapeless/NoshapeB_195.png', 'path': 'resources/Shapeless/NoshapeB_195.png'},
    {'name': 'resources/Shapeless/NoshapeB_196.png', 'path': 'resources/Shapeless/NoshapeB_196.png'},
    {'name': 'resources/Shapeless/NoshapeB_197.png', 'path': 'resources/Shapeless/NoshapeB_197.png'},
    {'name': 'resources/Shapeless/NoshapeB_198.png', 'path': 'resources/Shapeless/NoshapeB_198.png'},
    {'name': 'resources/Shapeless/NoshapeB_199.png', 'path': 'resources/Shapeless/NoshapeB_199.png'},
    {'name': 'resources/Shapeless/NoshapeB_200.png', 'path': 'resources/Shapeless/NoshapeB_200.png'},
    {'name': 'resources/Shapeless/NoshapeB_201.png', 'path': 'resources/Shapeless/NoshapeB_201.png'},
    {'name': 'resources/Shapeless/NoshapeB_202.png', 'path': 'resources/Shapeless/NoshapeB_202.png'},
    {'name': 'resources/Shapeless/NoshapeB_203.png', 'path': 'resources/Shapeless/NoshapeB_203.png'},
    {'name': 'resources/Shapeless/NoshapeB_204.png', 'path': 'resources/Shapeless/NoshapeB_204.png'},
    {'name': 'resources/Shapeless/NoshapeB_205.png', 'path': 'resources/Shapeless/NoshapeB_205.png'},
    {'name': 'resources/Shapeless/NoshapeB_206.png', 'path': 'resources/Shapeless/NoshapeB_206.png'},
    {'name': 'resources/Shapeless/NoshapeB_207.png', 'path': 'resources/Shapeless/NoshapeB_207.png'},
    {'name': 'resources/Shapeless/NoshapeB_208.png', 'path': 'resources/Shapeless/NoshapeB_208.png'},
    {'name': 'resources/Shapeless/NoshapeB_209.png', 'path': 'resources/Shapeless/NoshapeB_209.png'},
    {'name': 'resources/Shapeless/NoshapeB_210.png', 'path': 'resources/Shapeless/NoshapeB_210.png'},
    {'name': 'resources/Shapeless/NoshapeB_211.png', 'path': 'resources/Shapeless/NoshapeB_211.png'},
    {'name': 'resources/Shapeless/NoshapeB_212.png', 'path': 'resources/Shapeless/NoshapeB_212.png'},
    {'name': 'resources/Shapeless/NoshapeB_213.png', 'path': 'resources/Shapeless/NoshapeB_213.png'},
    {'name': 'resources/Shapeless/NoshapeB_214.png', 'path': 'resources/Shapeless/NoshapeB_214.png'},
    {'name': 'resources/Shapeless/NoshapeB_215.png', 'path': 'resources/Shapeless/NoshapeB_215.png'},
    {'name': 'resources/Shapeless/NoshapeB_216.png', 'path': 'resources/Shapeless/NoshapeB_216.png'},
    {'name': 'resources/Shapeless/NoshapeB_217.png', 'path': 'resources/Shapeless/NoshapeB_217.png'},
    {'name': 'resources/Shapeless/NoshapeB_218.png', 'path': 'resources/Shapeless/NoshapeB_218.png'},
    {'name': 'resources/Shapeless/NoshapeB_219.png', 'path': 'resources/Shapeless/NoshapeB_219.png'},
    {'name': 'resources/Shapeless/NoshapeB_220.png', 'path': 'resources/Shapeless/NoshapeB_220.png'},
    {'name': 'resources/Shapeless/NoshapeB_221.png', 'path': 'resources/Shapeless/NoshapeB_221.png'},
    {'name': 'resources/Shapeless/NoshapeB_222.png', 'path': 'resources/Shapeless/NoshapeB_222.png'},
    {'name': 'resources/Shapeless/NoshapeB_223.png', 'path': 'resources/Shapeless/NoshapeB_223.png'},
    {'name': 'resources/Shapeless/NoshapeB_224.png', 'path': 'resources/Shapeless/NoshapeB_224.png'},
    {'name': 'resources/Shapeless/NoshapeB_225.png', 'path': 'resources/Shapeless/NoshapeB_225.png'},
    {'name': 'resources/Shapeless/NoshapeB_226.png', 'path': 'resources/Shapeless/NoshapeB_226.png'},
    {'name': 'resources/Shapeless/NoshapeB_227.png', 'path': 'resources/Shapeless/NoshapeB_227.png'},
    {'name': 'resources/Shapeless/NoshapeB_228.png', 'path': 'resources/Shapeless/NoshapeB_228.png'},
    {'name': 'resources/Shapeless/NoshapeB_229.png', 'path': 'resources/Shapeless/NoshapeB_229.png'},
    {'name': 'resources/Shapeless/NoshapeB_230.png', 'path': 'resources/Shapeless/NoshapeB_230.png'},
    {'name': 'resources/Shapeless/NoshapeB_231.png', 'path': 'resources/Shapeless/NoshapeB_231.png'},
    {'name': 'resources/Shapeless/NoshapeB_232.png', 'path': 'resources/Shapeless/NoshapeB_232.png'},
    {'name': 'resources/Shapeless/NoshapeB_233.png', 'path': 'resources/Shapeless/NoshapeB_233.png'},
    {'name': 'resources/Shapeless/NoshapeB_234.png', 'path': 'resources/Shapeless/NoshapeB_234.png'},
    {'name': 'resources/Shapeless/NoshapeB_235.png', 'path': 'resources/Shapeless/NoshapeB_235.png'},
    {'name': 'resources/Shapeless/NoshapeB_236.png', 'path': 'resources/Shapeless/NoshapeB_236.png'},
    {'name': 'resources/Shapeless/NoshapeB_237.png', 'path': 'resources/Shapeless/NoshapeB_237.png'},
    {'name': 'resources/Shapeless/NoshapeB_238.png', 'path': 'resources/Shapeless/NoshapeB_238.png'},
    {'name': 'resources/Shapeless/NoshapeB_239.png', 'path': 'resources/Shapeless/NoshapeB_239.png'},
    {'name': 'resources/Shapeless/NoshapeB_240.png', 'path': 'resources/Shapeless/NoshapeB_240.png'},
    {'name': 'resources/Shapeless/NoshapeB_241.png', 'path': 'resources/Shapeless/NoshapeB_241.png'},
    {'name': 'resources/Shapeless/NoshapeB_242.png', 'path': 'resources/Shapeless/NoshapeB_242.png'},
    {'name': 'resources/Shapeless/NoshapeB_243.png', 'path': 'resources/Shapeless/NoshapeB_243.png'},
    {'name': 'resources/Shapeless/NoshapeB_244.png', 'path': 'resources/Shapeless/NoshapeB_244.png'},
    {'name': 'resources/Shapeless/NoshapeB_245.png', 'path': 'resources/Shapeless/NoshapeB_245.png'},
    {'name': 'resources/Shapeless/NoshapeB_246.png', 'path': 'resources/Shapeless/NoshapeB_246.png'},
    {'name': 'resources/Shapeless/NoshapeB_247.png', 'path': 'resources/Shapeless/NoshapeB_247.png'},
    {'name': 'resources/Shapeless/NoshapeB_248.png', 'path': 'resources/Shapeless/NoshapeB_248.png'},
    {'name': 'resources/Shapeless/NoshapeB_249.png', 'path': 'resources/Shapeless/NoshapeB_249.png'},
    {'name': 'resources/Shapeless/NoshapeB_250.png', 'path': 'resources/Shapeless/NoshapeB_250.png'},
    {'name': 'resources/Shapeless/NoshapeB_251.png', 'path': 'resources/Shapeless/NoshapeB_251.png'},
    {'name': 'resources/Shapeless/NoshapeB_252.png', 'path': 'resources/Shapeless/NoshapeB_252.png'},
    {'name': 'resources/Shapeless/NoshapeB_253.png', 'path': 'resources/Shapeless/NoshapeB_253.png'},
    {'name': 'resources/Shapeless/NoshapeB_254.png', 'path': 'resources/Shapeless/NoshapeB_254.png'},
    {'name': 'resources/Shapeless/NoshapeB_255.png', 'path': 'resources/Shapeless/NoshapeB_255.png'},
    {'name': 'resources/Shapeless/NoshapeB_256.png', 'path': 'resources/Shapeless/NoshapeB_256.png'},
    {'name': 'resources/Shapeless/NoshapeB_257.png', 'path': 'resources/Shapeless/NoshapeB_257.png'},
    {'name': 'resources/Shapeless/NoshapeB_258.png', 'path': 'resources/Shapeless/NoshapeB_258.png'},
    {'name': 'resources/Shapeless/NoshapeB_259.png', 'path': 'resources/Shapeless/NoshapeB_259.png'},
    {'name': 'resources/Shapeless/NoshapeB_260.png', 'path': 'resources/Shapeless/NoshapeB_260.png'},
    {'name': 'resources/Shapeless/NoshapeB_261.png', 'path': 'resources/Shapeless/NoshapeB_261.png'},
    {'name': 'resources/Shapeless/NoshapeB_262.png', 'path': 'resources/Shapeless/NoshapeB_262.png'},
    {'name': 'resources/Shapeless/NoshapeB_263.png', 'path': 'resources/Shapeless/NoshapeB_263.png'},
    {'name': 'resources/Shapeless/NoshapeB_264.png', 'path': 'resources/Shapeless/NoshapeB_264.png'},
    {'name': 'resources/Shapeless/NoshapeB_265.png', 'path': 'resources/Shapeless/NoshapeB_265.png'},
    {'name': 'resources/Shapeless/NoshapeB_266.png', 'path': 'resources/Shapeless/NoshapeB_266.png'},
    {'name': 'resources/Shapeless/NoshapeB_267.png', 'path': 'resources/Shapeless/NoshapeB_267.png'},
    {'name': 'resources/Shapeless/NoshapeB_268.png', 'path': 'resources/Shapeless/NoshapeB_268.png'},
    {'name': 'resources/Shapeless/NoshapeB_269.png', 'path': 'resources/Shapeless/NoshapeB_269.png'},
    {'name': 'resources/Shapeless/NoshapeB_270.png', 'path': 'resources/Shapeless/NoshapeB_270.png'},
    {'name': 'resources/Shapeless/NoshapeB_271.png', 'path': 'resources/Shapeless/NoshapeB_271.png'},
    {'name': 'resources/Shapeless/NoshapeB_272.png', 'path': 'resources/Shapeless/NoshapeB_272.png'},
    {'name': 'resources/Shapeless/NoshapeB_273.png', 'path': 'resources/Shapeless/NoshapeB_273.png'},
    {'name': 'resources/Shapeless/NoshapeB_274.png', 'path': 'resources/Shapeless/NoshapeB_274.png'},
    {'name': 'resources/Shapeless/NoshapeB_275.png', 'path': 'resources/Shapeless/NoshapeB_275.png'},
    {'name': 'resources/Shapeless/NoshapeB_276.png', 'path': 'resources/Shapeless/NoshapeB_276.png'},
    {'name': 'resources/Shapeless/NoshapeB_277.png', 'path': 'resources/Shapeless/NoshapeB_277.png'},
    {'name': 'resources/Shapeless/NoshapeB_278.png', 'path': 'resources/Shapeless/NoshapeB_278.png'},
    {'name': 'resources/Shapeless/NoshapeB_279.png', 'path': 'resources/Shapeless/NoshapeB_279.png'},
    {'name': 'resources/Shapeless/NoshapeB_280.png', 'path': 'resources/Shapeless/NoshapeB_280.png'},
    {'name': 'resources/Shapeless/NoshapeB_281.png', 'path': 'resources/Shapeless/NoshapeB_281.png'},
    {'name': 'resources/Shapeless/NoshapeB_282.png', 'path': 'resources/Shapeless/NoshapeB_282.png'},
    {'name': 'resources/Shapeless/NoshapeB_283.png', 'path': 'resources/Shapeless/NoshapeB_283.png'},
    {'name': 'resources/Shapeless/NoshapeB_284.png', 'path': 'resources/Shapeless/NoshapeB_284.png'},
    {'name': 'resources/Shapeless/NoshapeB_285.png', 'path': 'resources/Shapeless/NoshapeB_285.png'},
    {'name': 'resources/Shapeless/NoshapeB_286.png', 'path': 'resources/Shapeless/NoshapeB_286.png'},
    {'name': 'resources/Shapeless/NoshapeB_287.png', 'path': 'resources/Shapeless/NoshapeB_287.png'},
    {'name': 'resources/Shapeless/NoshapeB_288.png', 'path': 'resources/Shapeless/NoshapeB_288.png'},
    {'name': 'Block2CrestLineTRBL.xlsx', 'path': 'Block2CrestLineTRBL.xlsx'},
    {'name': 'resources/Crest/CrestTR1_1.png', 'path': 'resources/Crest/CrestTR1_1.png'},
    {'name': 'resources/Crest/CrestTR1_2.png', 'path': 'resources/Crest/CrestTR1_2.png'},
    {'name': 'resources/Crest/CrestTR1_3.png', 'path': 'resources/Crest/CrestTR1_3.png'},
    {'name': 'resources/Crest/CrestTR2_1.png', 'path': 'resources/Crest/CrestTR2_1.png'},
    {'name': 'resources/Crest/CrestTR2_2.png', 'path': 'resources/Crest/CrestTR2_2.png'},
    {'name': 'resources/Crest/CrestTR2_3.png', 'path': 'resources/Crest/CrestTR2_3.png'},
    {'name': 'resources/Crest/CrestTR3_1.png', 'path': 'resources/Crest/CrestTR3_1.png'},
    {'name': 'resources/Crest/CrestTR3_2.png', 'path': 'resources/Crest/CrestTR3_2.png'},
    {'name': 'resources/Crest/CrestTR3_3.png', 'path': 'resources/Crest/CrestTR3_3.png'},
    {'name': 'resources/Crest/CrestTR4_1.png', 'path': 'resources/Crest/CrestTR4_1.png'},
    {'name': 'resources/Crest/CrestTR4_2.png', 'path': 'resources/Crest/CrestTR4_2.png'},
    {'name': 'resources/Crest/CrestTR4_3.png', 'path': 'resources/Crest/CrestTR4_3.png'},
    {'name': 'resources/Crest/CrestBL1_1.png', 'path': 'resources/Crest/CrestBL1_1.png'},
    {'name': 'resources/Crest/CrestBL1_2.png', 'path': 'resources/Crest/CrestBL1_2.png'},
    {'name': 'resources/Crest/CrestBL1_3.png', 'path': 'resources/Crest/CrestBL1_3.png'},
    {'name': 'resources/Crest/CrestBL2_1.png', 'path': 'resources/Crest/CrestBL2_1.png'},
    {'name': 'resources/Crest/CrestBL2_2.png', 'path': 'resources/Crest/CrestBL2_2.png'},
    {'name': 'resources/Crest/CrestBL2_3.png', 'path': 'resources/Crest/CrestBL2_3.png'},
    {'name': 'resources/Crest/CrestBL3_1.png', 'path': 'resources/Crest/CrestBL3_1.png'},
    {'name': 'resources/Crest/CrestBL3_2.png', 'path': 'resources/Crest/CrestBL3_2.png'},
    {'name': 'resources/Crest/CrestBL3_3.png', 'path': 'resources/Crest/CrestBL3_3.png'},
    {'name': 'resources/Crest/CrestBL4_1.png', 'path': 'resources/Crest/CrestBL4_1.png'},
    {'name': 'resources/Crest/CrestBL4_2.png', 'path': 'resources/Crest/CrestBL4_2.png'},
    {'name': 'resources/Crest/CrestBL4_3.png', 'path': 'resources/Crest/CrestBL4_3.png'},
    {'name': 'resources/Crest/CrestTR1J10_1.png', 'path': 'resources/Crest/CrestTR1J10_1.png'},
    {'name': 'resources/Crest/CrestTR1J10_2.png', 'path': 'resources/Crest/CrestTR1J10_2.png'},
    {'name': 'resources/Crest/CrestTR1J10_3.png', 'path': 'resources/Crest/CrestTR1J10_3.png'},
    {'name': 'resources/Crest/CrestTR2J10_1.png', 'path': 'resources/Crest/CrestTR2J10_1.png'},
    {'name': 'resources/Crest/CrestTR2J10_2.png', 'path': 'resources/Crest/CrestTR2J10_2.png'},
    {'name': 'resources/Crest/CrestTR2J10_3.png', 'path': 'resources/Crest/CrestTR2J10_3.png'},
    {'name': 'resources/Crest/CrestTR3J10_1.png', 'path': 'resources/Crest/CrestTR3J10_1.png'},
    {'name': 'resources/Crest/CrestTR3J10_2.png', 'path': 'resources/Crest/CrestTR3J10_2.png'},
    {'name': 'resources/Crest/CrestTR3J10_3.png', 'path': 'resources/Crest/CrestTR3J10_3.png'},
    {'name': 'resources/Crest/CrestTR4J10_1.png', 'path': 'resources/Crest/CrestTR4J10_1.png'},
    {'name': 'resources/Crest/CrestTR4J10_2.png', 'path': 'resources/Crest/CrestTR4J10_2.png'},
    {'name': 'resources/Crest/CrestTR4J10_3.png', 'path': 'resources/Crest/CrestTR4J10_3.png'},
    {'name': 'resources/Crest/CrestBL1J10_1.png', 'path': 'resources/Crest/CrestBL1J10_1.png'},
    {'name': 'resources/Crest/CrestBL1J10_2.png', 'path': 'resources/Crest/CrestBL1J10_2.png'},
    {'name': 'resources/Crest/CrestBL1J10_3.png', 'path': 'resources/Crest/CrestBL1J10_3.png'},
    {'name': 'resources/Crest/CrestBL2J10_1.png', 'path': 'resources/Crest/CrestBL2J10_1.png'},
    {'name': 'resources/Crest/CrestBL2J10_2.png', 'path': 'resources/Crest/CrestBL2J10_2.png'},
    {'name': 'resources/Crest/CrestBL2J10_3.png', 'path': 'resources/Crest/CrestBL2J10_3.png'},
    {'name': 'resources/Crest/CrestBL3J10_1.png', 'path': 'resources/Crest/CrestBL3J10_1.png'},
    {'name': 'resources/Crest/CrestBL3J10_2.png', 'path': 'resources/Crest/CrestBL3J10_2.png'},
    {'name': 'resources/Crest/CrestBL3J10_3.png', 'path': 'resources/Crest/CrestBL3J10_3.png'},
    {'name': 'resources/Crest/CrestBL4J10_1.png', 'path': 'resources/Crest/CrestBL4J10_1.png'},
    {'name': 'resources/Crest/CrestBL4J10_2.png', 'path': 'resources/Crest/CrestBL4J10_2.png'},
    {'name': 'resources/Crest/CrestBL4J10_3.png', 'path': 'resources/Crest/CrestBL4J10_3.png'},
    {'name': 'resources/Crest/CrestTR1J20_1.png', 'path': 'resources/Crest/CrestTR1J20_1.png'},
    {'name': 'resources/Crest/CrestTR1J20_2.png', 'path': 'resources/Crest/CrestTR1J20_2.png'},
    {'name': 'resources/Crest/CrestTR1J20_3.png', 'path': 'resources/Crest/CrestTR1J20_3.png'},
    {'name': 'resources/Crest/CrestTR2J20_1.png', 'path': 'resources/Crest/CrestTR2J20_1.png'},
    {'name': 'resources/Crest/CrestTR2J20_2.png', 'path': 'resources/Crest/CrestTR2J20_2.png'},
    {'name': 'resources/Crest/CrestTR2J20_3.png', 'path': 'resources/Crest/CrestTR2J20_3.png'},
    {'name': 'resources/Crest/CrestTR3J20_1.png', 'path': 'resources/Crest/CrestTR3J20_1.png'},
    {'name': 'resources/Crest/CrestTR3J20_2.png', 'path': 'resources/Crest/CrestTR3J20_2.png'},
    {'name': 'resources/Crest/CrestTR3J20_3.png', 'path': 'resources/Crest/CrestTR3J20_3.png'},
    {'name': 'resources/Crest/CrestTR4J20_1.png', 'path': 'resources/Crest/CrestTR4J20_1.png'},
    {'name': 'resources/Crest/CrestTR4J20_2.png', 'path': 'resources/Crest/CrestTR4J20_2.png'},
    {'name': 'resources/Crest/CrestTR4J20_3.png', 'path': 'resources/Crest/CrestTR4J20_3.png'},
    {'name': 'resources/Crest/CrestBL1J20_1.png', 'path': 'resources/Crest/CrestBL1J20_1.png'},
    {'name': 'resources/Crest/CrestBL1J20_2.png', 'path': 'resources/Crest/CrestBL1J20_2.png'},
    {'name': 'resources/Crest/CrestBL1J20_3.png', 'path': 'resources/Crest/CrestBL1J20_3.png'},
    {'name': 'resources/Crest/CrestBL2J20_1.png', 'path': 'resources/Crest/CrestBL2J20_1.png'},
    {'name': 'resources/Crest/CrestBL2J20_2.png', 'path': 'resources/Crest/CrestBL2J20_2.png'},
    {'name': 'resources/Crest/CrestBL2J20_3.png', 'path': 'resources/Crest/CrestBL2J20_3.png'},
    {'name': 'resources/Crest/CrestBL3J20_1.png', 'path': 'resources/Crest/CrestBL3J20_1.png'},
    {'name': 'resources/Crest/CrestBL3J20_2.png', 'path': 'resources/Crest/CrestBL3J20_2.png'},
    {'name': 'resources/Crest/CrestBL3J20_3.png', 'path': 'resources/Crest/CrestBL3J20_3.png'},
    {'name': 'resources/Crest/CrestBL4J20_1.png', 'path': 'resources/Crest/CrestBL4J20_1.png'},
    {'name': 'resources/Crest/CrestBL4J20_2.png', 'path': 'resources/Crest/CrestBL4J20_2.png'},
    {'name': 'resources/Crest/CrestBL4J20_3.png', 'path': 'resources/Crest/CrestBL4J20_3.png'},
    {'name': 'resources/Line/LineTR1_1.png', 'path': 'resources/Line/LineTR1_1.png'},
    {'name': 'resources/Line/LineTR1_2.png', 'path': 'resources/Line/LineTR1_2.png'},
    {'name': 'resources/Line/LineTR1_3.png', 'path': 'resources/Line/LineTR1_3.png'},
    {'name': 'resources/Line/LineTR2_1.png', 'path': 'resources/Line/LineTR2_1.png'},
    {'name': 'resources/Line/LineTR2_2.png', 'path': 'resources/Line/LineTR2_2.png'},
    {'name': 'resources/Line/LineTR2_3.png', 'path': 'resources/Line/LineTR2_3.png'},
    {'name': 'resources/Line/LineTR3_1.png', 'path': 'resources/Line/LineTR3_1.png'},
    {'name': 'resources/Line/LineTR3_2.png', 'path': 'resources/Line/LineTR3_2.png'},
    {'name': 'resources/Line/LineTR3_3.png', 'path': 'resources/Line/LineTR3_3.png'},
    {'name': 'resources/Line/LineTR4_1.png', 'path': 'resources/Line/LineTR4_1.png'},
    {'name': 'resources/Line/LineTR4_2.png', 'path': 'resources/Line/LineTR4_2.png'},
    {'name': 'resources/Line/LineTR4_3.png', 'path': 'resources/Line/LineTR4_3.png'},
    {'name': 'resources/Line/LineBL1J10_1.png', 'path': 'resources/Line/LineBL1J10_1.png'},
    {'name': 'resources/Line/LineBL1J10_2.png', 'path': 'resources/Line/LineBL1J10_2.png'},
    {'name': 'resources/Line/LineBL1J10_3.png', 'path': 'resources/Line/LineBL1J10_3.png'},
    {'name': 'resources/Line/LineBL2J10_1.png', 'path': 'resources/Line/LineBL2J10_1.png'},
    {'name': 'resources/Line/LineBL2J10_2.png', 'path': 'resources/Line/LineBL2J10_2.png'},
    {'name': 'resources/Line/LineBL2J10_3.png', 'path': 'resources/Line/LineBL2J10_3.png'},
    {'name': 'resources/Line/LineBL3J10_1.png', 'path': 'resources/Line/LineBL3J10_1.png'},
    {'name': 'resources/Line/LineBL3J10_2.png', 'path': 'resources/Line/LineBL3J10_2.png'},
    {'name': 'resources/Line/LineBL3J10_3.png', 'path': 'resources/Line/LineBL3J10_3.png'},
    {'name': 'resources/Line/LineBL4J10_1.png', 'path': 'resources/Line/LineBL4J10_1.png'},
    {'name': 'resources/Line/LineBL4J10_2.png', 'path': 'resources/Line/LineBL4J10_2.png'},
    {'name': 'resources/Line/LineBL4J10_3.png', 'path': 'resources/Line/LineBL4J10_3.png'},
    {'name': 'resources/Line/LineTR1J20_1.png', 'path': 'resources/Line/LineTR1J20_1.png'},
    {'name': 'resources/Line/LineTR1J20_2.png', 'path': 'resources/Line/LineTR1J20_2.png'},
    {'name': 'resources/Line/LineTR1J20_3.png', 'path': 'resources/Line/LineTR1J20_3.png'},
    {'name': 'resources/Line/LineTR2J20_1.png', 'path': 'resources/Line/LineTR2J20_1.png'},
    {'name': 'resources/Line/LineTR2J20_2.png', 'path': 'resources/Line/LineTR2J20_2.png'},
    {'name': 'resources/Line/LineTR2J20_3.png', 'path': 'resources/Line/LineTR2J20_3.png'},
    {'name': 'resources/Line/LineTR3J20_1.png', 'path': 'resources/Line/LineTR3J20_1.png'},
    {'name': 'resources/Line/LineTR3J20_2.png', 'path': 'resources/Line/LineTR3J20_2.png'},
    {'name': 'resources/Line/LineTR3J20_3.png', 'path': 'resources/Line/LineTR3J20_3.png'},
    {'name': 'resources/Line/LineTR4J20_1.png', 'path': 'resources/Line/LineTR4J20_1.png'},
    {'name': 'resources/Line/LineTR4J20_2.png', 'path': 'resources/Line/LineTR4J20_2.png'},
    {'name': 'resources/Line/LineTR4J20_3.png', 'path': 'resources/Line/LineTR4J20_3.png'},
    {'name': 'resources/Line/LineBL1_1.png', 'path': 'resources/Line/LineBL1_1.png'},
    {'name': 'resources/Line/LineBL1_2.png', 'path': 'resources/Line/LineBL1_2.png'},
    {'name': 'resources/Line/LineBL1_3.png', 'path': 'resources/Line/LineBL1_3.png'},
    {'name': 'resources/Line/LineBL2_1.png', 'path': 'resources/Line/LineBL2_1.png'},
    {'name': 'resources/Line/LineBL2_2.png', 'path': 'resources/Line/LineBL2_2.png'},
    {'name': 'resources/Line/LineBL2_3.png', 'path': 'resources/Line/LineBL2_3.png'},
    {'name': 'resources/Line/LineBL3_1.png', 'path': 'resources/Line/LineBL3_1.png'},
    {'name': 'resources/Line/LineBL3_2.png', 'path': 'resources/Line/LineBL3_2.png'},
    {'name': 'resources/Line/LineBL3_3.png', 'path': 'resources/Line/LineBL3_3.png'},
    {'name': 'resources/Line/LineBL4_1.png', 'path': 'resources/Line/LineBL4_1.png'},
    {'name': 'resources/Line/LineBL4_2.png', 'path': 'resources/Line/LineBL4_2.png'},
    {'name': 'resources/Line/LineBL4_3.png', 'path': 'resources/Line/LineBL4_3.png'},
    {'name': 'resources/Line/LineTR1J10_1.png', 'path': 'resources/Line/LineTR1J10_1.png'},
    {'name': 'resources/Line/LineTR1J10_2.png', 'path': 'resources/Line/LineTR1J10_2.png'},
    {'name': 'resources/Line/LineTR1J10_3.png', 'path': 'resources/Line/LineTR1J10_3.png'},
    {'name': 'resources/Line/LineTR2J10_1.png', 'path': 'resources/Line/LineTR2J10_1.png'},
    {'name': 'resources/Line/LineTR2J10_2.png', 'path': 'resources/Line/LineTR2J10_2.png'},
    {'name': 'resources/Line/LineTR2J10_3.png', 'path': 'resources/Line/LineTR2J10_3.png'},
    {'name': 'resources/Line/LineTR3J10_1.png', 'path': 'resources/Line/LineTR3J10_1.png'},
    {'name': 'resources/Line/LineTR3J10_2.png', 'path': 'resources/Line/LineTR3J10_2.png'},
    {'name': 'resources/Line/LineTR3J10_3.png', 'path': 'resources/Line/LineTR3J10_3.png'},
    {'name': 'resources/Line/LineTR4J10_1.png', 'path': 'resources/Line/LineTR4J10_1.png'},
    {'name': 'resources/Line/LineTR4J10_2.png', 'path': 'resources/Line/LineTR4J10_2.png'},
    {'name': 'resources/Line/LineTR4J10_3.png', 'path': 'resources/Line/LineTR4J10_3.png'},
    {'name': 'resources/Line/LineBL1J20_2.png', 'path': 'resources/Line/LineBL1J20_2.png'},
    {'name': 'resources/Line/LineBL1J20_3.png', 'path': 'resources/Line/LineBL1J20_3.png'},
    {'name': 'resources/Line/LineBL2J20_1.png', 'path': 'resources/Line/LineBL2J20_1.png'},
    {'name': 'resources/Line/LineBL2J20_2.png', 'path': 'resources/Line/LineBL2J20_2.png'},
    {'name': 'resources/Line/LineBL2J20_3.png', 'path': 'resources/Line/LineBL2J20_3.png'},
    {'name': 'resources/Line/LineBL3J20_1.png', 'path': 'resources/Line/LineBL3J20_1.png'},
    {'name': 'resources/Line/LineBL3J20_2.png', 'path': 'resources/Line/LineBL3J20_2.png'},
    {'name': 'resources/Line/LineBL3J20_3.png', 'path': 'resources/Line/LineBL3J20_3.png'},
    {'name': 'resources/Line/LineBL4J20_1.png', 'path': 'resources/Line/LineBL4J20_1.png'},
    {'name': 'resources/Line/LineBL4J20_2.png', 'path': 'resources/Line/LineBL4J20_2.png'},
    {'name': 'resources/Line/LineBL4J20_3.png', 'path': 'resources/Line/LineBL4J20_3.png'},
    {'name': 'resources/Shapeless/NoshapeB_289.png', 'path': 'resources/Shapeless/NoshapeB_289.png'},
    {'name': 'resources/Shapeless/NoshapeB_290.png', 'path': 'resources/Shapeless/NoshapeB_290.png'},
    {'name': 'resources/Shapeless/NoshapeB_291.png', 'path': 'resources/Shapeless/NoshapeB_291.png'},
    {'name': 'resources/Shapeless/NoshapeB_292.png', 'path': 'resources/Shapeless/NoshapeB_292.png'},
    {'name': 'resources/Shapeless/NoshapeB_293.png', 'path': 'resources/Shapeless/NoshapeB_293.png'},
    {'name': 'resources/Shapeless/NoshapeB_294.png', 'path': 'resources/Shapeless/NoshapeB_294.png'},
    {'name': 'resources/Shapeless/NoshapeB_295.png', 'path': 'resources/Shapeless/NoshapeB_295.png'},
    {'name': 'resources/Shapeless/NoshapeB_296.png', 'path': 'resources/Shapeless/NoshapeB_296.png'},
    {'name': 'resources/Shapeless/NoshapeB_297.png', 'path': 'resources/Shapeless/NoshapeB_297.png'},
    {'name': 'resources/Shapeless/NoshapeB_298.png', 'path': 'resources/Shapeless/NoshapeB_298.png'},
    {'name': 'resources/Shapeless/NoshapeB_299.png', 'path': 'resources/Shapeless/NoshapeB_299.png'},
    {'name': 'resources/Shapeless/NoshapeB_300.png', 'path': 'resources/Shapeless/NoshapeB_300.png'},
    {'name': 'resources/Shapeless/NoshapeB_301.png', 'path': 'resources/Shapeless/NoshapeB_301.png'},
    {'name': 'resources/Shapeless/NoshapeB_302.png', 'path': 'resources/Shapeless/NoshapeB_302.png'},
    {'name': 'resources/Shapeless/NoshapeB_303.png', 'path': 'resources/Shapeless/NoshapeB_303.png'},
    {'name': 'resources/Shapeless/NoshapeB_304.png', 'path': 'resources/Shapeless/NoshapeB_304.png'},
    {'name': 'resources/Shapeless/NoshapeB_305.png', 'path': 'resources/Shapeless/NoshapeB_305.png'},
    {'name': 'resources/Shapeless/NoshapeB_306.png', 'path': 'resources/Shapeless/NoshapeB_306.png'},
    {'name': 'resources/Shapeless/NoshapeB_307.png', 'path': 'resources/Shapeless/NoshapeB_307.png'},
    {'name': 'resources/Shapeless/NoshapeB_308.png', 'path': 'resources/Shapeless/NoshapeB_308.png'},
    {'name': 'resources/Shapeless/NoshapeB_309.png', 'path': 'resources/Shapeless/NoshapeB_309.png'},
    {'name': 'resources/Shapeless/NoshapeB_310.png', 'path': 'resources/Shapeless/NoshapeB_310.png'},
    {'name': 'resources/Shapeless/NoshapeB_311.png', 'path': 'resources/Shapeless/NoshapeB_311.png'},
    {'name': 'resources/Shapeless/NoshapeB_312.png', 'path': 'resources/Shapeless/NoshapeB_312.png'},
    {'name': 'resources/Shapeless/NoshapeB_313.png', 'path': 'resources/Shapeless/NoshapeB_313.png'},
    {'name': 'resources/Shapeless/NoshapeB_314.png', 'path': 'resources/Shapeless/NoshapeB_314.png'},
    {'name': 'resources/Shapeless/NoshapeB_315.png', 'path': 'resources/Shapeless/NoshapeB_315.png'},
    {'name': 'resources/Shapeless/NoshapeB_316.png', 'path': 'resources/Shapeless/NoshapeB_316.png'},
    {'name': 'resources/Shapeless/NoshapeB_317.png', 'path': 'resources/Shapeless/NoshapeB_317.png'},
    {'name': 'resources/Shapeless/NoshapeB_318.png', 'path': 'resources/Shapeless/NoshapeB_318.png'},
    {'name': 'resources/Shapeless/NoshapeB_319.png', 'path': 'resources/Shapeless/NoshapeB_319.png'},
    {'name': 'resources/Shapeless/NoshapeB_320.png', 'path': 'resources/Shapeless/NoshapeB_320.png'},
    {'name': 'resources/Shapeless/NoshapeB_321.png', 'path': 'resources/Shapeless/NoshapeB_321.png'},
    {'name': 'resources/Shapeless/NoshapeB_322.png', 'path': 'resources/Shapeless/NoshapeB_322.png'},
    {'name': 'resources/Shapeless/NoshapeB_323.png', 'path': 'resources/Shapeless/NoshapeB_323.png'},
    {'name': 'resources/Shapeless/NoshapeB_324.png', 'path': 'resources/Shapeless/NoshapeB_324.png'},
    {'name': 'resources/Shapeless/NoshapeB_325.png', 'path': 'resources/Shapeless/NoshapeB_325.png'},
    {'name': 'resources/Shapeless/NoshapeB_326.png', 'path': 'resources/Shapeless/NoshapeB_326.png'},
    {'name': 'resources/Shapeless/NoshapeB_327.png', 'path': 'resources/Shapeless/NoshapeB_327.png'},
    {'name': 'resources/Shapeless/NoshapeB_328.png', 'path': 'resources/Shapeless/NoshapeB_328.png'},
    {'name': 'resources/Shapeless/NoshapeB_329.png', 'path': 'resources/Shapeless/NoshapeB_329.png'},
    {'name': 'resources/Shapeless/NoshapeB_330.png', 'path': 'resources/Shapeless/NoshapeB_330.png'},
    {'name': 'resources/Shapeless/NoshapeB_331.png', 'path': 'resources/Shapeless/NoshapeB_331.png'},
    {'name': 'resources/Shapeless/NoshapeB_332.png', 'path': 'resources/Shapeless/NoshapeB_332.png'},
    {'name': 'resources/Shapeless/NoshapeB_333.png', 'path': 'resources/Shapeless/NoshapeB_333.png'},
    {'name': 'resources/Shapeless/NoshapeB_334.png', 'path': 'resources/Shapeless/NoshapeB_334.png'},
    {'name': 'resources/Shapeless/NoshapeB_335.png', 'path': 'resources/Shapeless/NoshapeB_335.png'},
    {'name': 'resources/Shapeless/NoshapeB_336.png', 'path': 'resources/Shapeless/NoshapeB_336.png'},
    {'name': 'resources/Shapeless/NoshapeB_337.png', 'path': 'resources/Shapeless/NoshapeB_337.png'},
    {'name': 'resources/Shapeless/NoshapeB_338.png', 'path': 'resources/Shapeless/NoshapeB_338.png'},
    {'name': 'resources/Shapeless/NoshapeB_339.png', 'path': 'resources/Shapeless/NoshapeB_339.png'},
    {'name': 'resources/Shapeless/NoshapeB_340.png', 'path': 'resources/Shapeless/NoshapeB_340.png'},
    {'name': 'resources/Shapeless/NoshapeB_341.png', 'path': 'resources/Shapeless/NoshapeB_341.png'},
    {'name': 'resources/Shapeless/NoshapeB_342.png', 'path': 'resources/Shapeless/NoshapeB_342.png'},
    {'name': 'resources/Shapeless/NoshapeB_343.png', 'path': 'resources/Shapeless/NoshapeB_343.png'},
    {'name': 'resources/Shapeless/NoshapeB_344.png', 'path': 'resources/Shapeless/NoshapeB_344.png'},
    {'name': 'resources/Shapeless/NoshapeB_345.png', 'path': 'resources/Shapeless/NoshapeB_345.png'},
    {'name': 'resources/Shapeless/NoshapeB_346.png', 'path': 'resources/Shapeless/NoshapeB_346.png'},
    {'name': 'resources/Shapeless/NoshapeB_347.png', 'path': 'resources/Shapeless/NoshapeB_347.png'},
    {'name': 'resources/Shapeless/NoshapeB_348.png', 'path': 'resources/Shapeless/NoshapeB_348.png'},
    {'name': 'resources/Shapeless/NoshapeB_349.png', 'path': 'resources/Shapeless/NoshapeB_349.png'},
    {'name': 'resources/Shapeless/NoshapeB_350.png', 'path': 'resources/Shapeless/NoshapeB_350.png'},
    {'name': 'resources/Shapeless/NoshapeB_351.png', 'path': 'resources/Shapeless/NoshapeB_351.png'},
    {'name': 'resources/Shapeless/NoshapeB_352.png', 'path': 'resources/Shapeless/NoshapeB_352.png'},
    {'name': 'resources/Shapeless/NoshapeB_353.png', 'path': 'resources/Shapeless/NoshapeB_353.png'},
    {'name': 'resources/Shapeless/NoshapeB_354.png', 'path': 'resources/Shapeless/NoshapeB_354.png'},
    {'name': 'resources/Shapeless/NoshapeB_355.png', 'path': 'resources/Shapeless/NoshapeB_355.png'},
    {'name': 'resources/Shapeless/NoshapeB_356.png', 'path': 'resources/Shapeless/NoshapeB_356.png'},
    {'name': 'resources/Shapeless/NoshapeB_357.png', 'path': 'resources/Shapeless/NoshapeB_357.png'},
    {'name': 'resources/Shapeless/NoshapeB_358.png', 'path': 'resources/Shapeless/NoshapeB_358.png'},
    {'name': 'resources/Shapeless/NoshapeB_359.png', 'path': 'resources/Shapeless/NoshapeB_359.png'},
    {'name': 'resources/Shapeless/NoshapeB_360.png', 'path': 'resources/Shapeless/NoshapeB_360.png'},
    {'name': 'resources/Shapeless/NoshapeB_361.png', 'path': 'resources/Shapeless/NoshapeB_361.png'},
    {'name': 'resources/Shapeless/NoshapeB_362.png', 'path': 'resources/Shapeless/NoshapeB_362.png'},
    {'name': 'resources/Shapeless/NoshapeB_363.png', 'path': 'resources/Shapeless/NoshapeB_363.png'},
    {'name': 'resources/Shapeless/NoshapeB_364.png', 'path': 'resources/Shapeless/NoshapeB_364.png'},
    {'name': 'resources/Shapeless/NoshapeB_365.png', 'path': 'resources/Shapeless/NoshapeB_365.png'},
    {'name': 'resources/Shapeless/NoshapeB_366.png', 'path': 'resources/Shapeless/NoshapeB_366.png'},
    {'name': 'resources/Shapeless/NoshapeB_367.png', 'path': 'resources/Shapeless/NoshapeB_367.png'},
    {'name': 'resources/Shapeless/NoshapeB_368.png', 'path': 'resources/Shapeless/NoshapeB_368.png'},
    {'name': 'resources/Shapeless/NoshapeB_369.png', 'path': 'resources/Shapeless/NoshapeB_369.png'},
    {'name': 'resources/Shapeless/NoshapeB_370.png', 'path': 'resources/Shapeless/NoshapeB_370.png'},
    {'name': 'resources/Shapeless/NoshapeB_371.png', 'path': 'resources/Shapeless/NoshapeB_371.png'},
    {'name': 'resources/Shapeless/NoshapeB_372.png', 'path': 'resources/Shapeless/NoshapeB_372.png'},
    {'name': 'resources/Shapeless/NoshapeB_373.png', 'path': 'resources/Shapeless/NoshapeB_373.png'},
    {'name': 'resources/Shapeless/NoshapeB_374.png', 'path': 'resources/Shapeless/NoshapeB_374.png'},
    {'name': 'resources/Shapeless/NoshapeB_375.png', 'path': 'resources/Shapeless/NoshapeB_375.png'},
    {'name': 'resources/Shapeless/NoshapeB_376.png', 'path': 'resources/Shapeless/NoshapeB_376.png'},
    {'name': 'resources/Shapeless/NoshapeB_377.png', 'path': 'resources/Shapeless/NoshapeB_377.png'},
    {'name': 'resources/Shapeless/NoshapeB_378.png', 'path': 'resources/Shapeless/NoshapeB_378.png'},
    {'name': 'resources/Shapeless/NoshapeB_379.png', 'path': 'resources/Shapeless/NoshapeB_379.png'},
    {'name': 'resources/Shapeless/NoshapeB_380.png', 'path': 'resources/Shapeless/NoshapeB_380.png'},
    {'name': 'resources/Shapeless/NoshapeB_381.png', 'path': 'resources/Shapeless/NoshapeB_381.png'},
    {'name': 'resources/Shapeless/NoshapeB_382.png', 'path': 'resources/Shapeless/NoshapeB_382.png'},
    {'name': 'resources/Shapeless/NoshapeB_383.png', 'path': 'resources/Shapeless/NoshapeB_383.png'},
    {'name': 'resources/Shapeless/NoshapeB_384.png', 'path': 'resources/Shapeless/NoshapeB_384.png'},
    {'name': 'resources/Shapeless/NoshapeB_385.png', 'path': 'resources/Shapeless/NoshapeB_385.png'},
    {'name': 'resources/Shapeless/NoshapeB_386.png', 'path': 'resources/Shapeless/NoshapeB_386.png'},
    {'name': 'resources/Shapeless/NoshapeB_387.png', 'path': 'resources/Shapeless/NoshapeB_387.png'},
    {'name': 'resources/Shapeless/NoshapeB_388.png', 'path': 'resources/Shapeless/NoshapeB_388.png'},
    {'name': 'resources/Shapeless/NoshapeB_389.png', 'path': 'resources/Shapeless/NoshapeB_389.png'},
    {'name': 'resources/Shapeless/NoshapeB_390.png', 'path': 'resources/Shapeless/NoshapeB_390.png'},
    {'name': 'resources/Shapeless/NoshapeB_391.png', 'path': 'resources/Shapeless/NoshapeB_391.png'},
    {'name': 'resources/Shapeless/NoshapeB_392.png', 'path': 'resources/Shapeless/NoshapeB_392.png'},
    {'name': 'resources/Shapeless/NoshapeB_393.png', 'path': 'resources/Shapeless/NoshapeB_393.png'},
    {'name': 'resources/Shapeless/NoshapeB_394.png', 'path': 'resources/Shapeless/NoshapeB_394.png'},
    {'name': 'resources/Shapeless/NoshapeB_395.png', 'path': 'resources/Shapeless/NoshapeB_395.png'},
    {'name': 'resources/Shapeless/NoshapeB_396.png', 'path': 'resources/Shapeless/NoshapeB_396.png'},
    {'name': 'resources/Shapeless/NoshapeB_397.png', 'path': 'resources/Shapeless/NoshapeB_397.png'},
    {'name': 'resources/Shapeless/NoshapeB_398.png', 'path': 'resources/Shapeless/NoshapeB_398.png'},
    {'name': 'resources/Shapeless/NoshapeB_399.png', 'path': 'resources/Shapeless/NoshapeB_399.png'},
    {'name': 'resources/Shapeless/NoshapeB_400.png', 'path': 'resources/Shapeless/NoshapeB_400.png'},
    {'name': 'resources/Shapeless/NoshapeB_401.png', 'path': 'resources/Shapeless/NoshapeB_401.png'},
    {'name': 'resources/Shapeless/NoshapeB_402.png', 'path': 'resources/Shapeless/NoshapeB_402.png'},
    {'name': 'resources/Shapeless/NoshapeB_403.png', 'path': 'resources/Shapeless/NoshapeB_403.png'},
    {'name': 'resources/Shapeless/NoshapeB_404.png', 'path': 'resources/Shapeless/NoshapeB_404.png'},
    {'name': 'resources/Shapeless/NoshapeB_405.png', 'path': 'resources/Shapeless/NoshapeB_405.png'},
    {'name': 'resources/Shapeless/NoshapeB_406.png', 'path': 'resources/Shapeless/NoshapeB_406.png'},
    {'name': 'resources/Shapeless/NoshapeB_407.png', 'path': 'resources/Shapeless/NoshapeB_407.png'},
    {'name': 'resources/Shapeless/NoshapeB_408.png', 'path': 'resources/Shapeless/NoshapeB_408.png'},
    {'name': 'resources/Shapeless/NoshapeB_409.png', 'path': 'resources/Shapeless/NoshapeB_409.png'},
    {'name': 'resources/Shapeless/NoshapeB_410.png', 'path': 'resources/Shapeless/NoshapeB_410.png'},
    {'name': 'resources/Shapeless/NoshapeB_411.png', 'path': 'resources/Shapeless/NoshapeB_411.png'},
    {'name': 'resources/Shapeless/NoshapeB_412.png', 'path': 'resources/Shapeless/NoshapeB_412.png'},
    {'name': 'resources/Shapeless/NoshapeB_413.png', 'path': 'resources/Shapeless/NoshapeB_413.png'},
    {'name': 'resources/Shapeless/NoshapeB_414.png', 'path': 'resources/Shapeless/NoshapeB_414.png'},
    {'name': 'resources/Shapeless/NoshapeB_415.png', 'path': 'resources/Shapeless/NoshapeB_415.png'},
    {'name': 'resources/Shapeless/NoshapeB_416.png', 'path': 'resources/Shapeless/NoshapeB_416.png'},
    {'name': 'resources/Shapeless/NoshapeB_417.png', 'path': 'resources/Shapeless/NoshapeB_417.png'},
    {'name': 'resources/Shapeless/NoshapeB_418.png', 'path': 'resources/Shapeless/NoshapeB_418.png'},
    {'name': 'resources/Shapeless/NoshapeB_419.png', 'path': 'resources/Shapeless/NoshapeB_419.png'},
    {'name': 'resources/Shapeless/NoshapeB_420.png', 'path': 'resources/Shapeless/NoshapeB_420.png'},
    {'name': 'resources/Shapeless/NoshapeB_421.png', 'path': 'resources/Shapeless/NoshapeB_421.png'},
    {'name': 'resources/Shapeless/NoshapeB_422.png', 'path': 'resources/Shapeless/NoshapeB_422.png'},
    {'name': 'resources/Shapeless/NoshapeB_423.png', 'path': 'resources/Shapeless/NoshapeB_423.png'},
    {'name': 'resources/Shapeless/NoshapeB_424.png', 'path': 'resources/Shapeless/NoshapeB_424.png'},
    {'name': 'resources/Shapeless/NoshapeB_425.png', 'path': 'resources/Shapeless/NoshapeB_425.png'},
    {'name': 'resources/Shapeless/NoshapeB_426.png', 'path': 'resources/Shapeless/NoshapeB_426.png'},
    {'name': 'resources/Shapeless/NoshapeB_427.png', 'path': 'resources/Shapeless/NoshapeB_427.png'},
    {'name': 'resources/Shapeless/NoshapeB_428.png', 'path': 'resources/Shapeless/NoshapeB_428.png'},
    {'name': 'resources/Shapeless/NoshapeB_429.png', 'path': 'resources/Shapeless/NoshapeB_429.png'},
    {'name': 'resources/Shapeless/NoshapeB_430.png', 'path': 'resources/Shapeless/NoshapeB_430.png'},
    {'name': 'resources/Shapeless/NoshapeB_431.png', 'path': 'resources/Shapeless/NoshapeB_431.png'},
    {'name': 'resources/Shapeless/NoshapeB_432.png', 'path': 'resources/Shapeless/NoshapeB_432.png'},
    {'name': 'Block2CrestLineTRBL_2.xlsx', 'path': 'Block2CrestLineTRBL_2.xlsx'},
    {'name': 'resources/Crest/CrestTR1_4.png', 'path': 'resources/Crest/CrestTR1_4.png'},
    {'name': 'resources/Crest/CrestTR1_5.png', 'path': 'resources/Crest/CrestTR1_5.png'},
    {'name': 'resources/Crest/CrestTR1_6.png', 'path': 'resources/Crest/CrestTR1_6.png'},
    {'name': 'resources/Crest/CrestTR2_4.png', 'path': 'resources/Crest/CrestTR2_4.png'},
    {'name': 'resources/Crest/CrestTR2_5.png', 'path': 'resources/Crest/CrestTR2_5.png'},
    {'name': 'resources/Crest/CrestTR2_6.png', 'path': 'resources/Crest/CrestTR2_6.png'},
    {'name': 'resources/Crest/CrestTR3_4.png', 'path': 'resources/Crest/CrestTR3_4.png'},
    {'name': 'resources/Crest/CrestTR3_5.png', 'path': 'resources/Crest/CrestTR3_5.png'},
    {'name': 'resources/Crest/CrestTR3_6.png', 'path': 'resources/Crest/CrestTR3_6.png'},
    {'name': 'resources/Crest/CrestTR4_4.png', 'path': 'resources/Crest/CrestTR4_4.png'},
    {'name': 'resources/Crest/CrestTR4_5.png', 'path': 'resources/Crest/CrestTR4_5.png'},
    {'name': 'resources/Crest/CrestTR4_6.png', 'path': 'resources/Crest/CrestTR4_6.png'},
    {'name': 'resources/Crest/CrestBL1_4.png', 'path': 'resources/Crest/CrestBL1_4.png'},
    {'name': 'resources/Crest/CrestBL1_5.png', 'path': 'resources/Crest/CrestBL1_5.png'},
    {'name': 'resources/Crest/CrestBL1_6.png', 'path': 'resources/Crest/CrestBL1_6.png'},
    {'name': 'resources/Crest/CrestBL2_4.png', 'path': 'resources/Crest/CrestBL2_4.png'},
    {'name': 'resources/Crest/CrestBL2_5.png', 'path': 'resources/Crest/CrestBL2_5.png'},
    {'name': 'resources/Crest/CrestBL2_6.png', 'path': 'resources/Crest/CrestBL2_6.png'},
    {'name': 'resources/Crest/CrestBL3_4.png', 'path': 'resources/Crest/CrestBL3_4.png'},
    {'name': 'resources/Crest/CrestBL3_5.png', 'path': 'resources/Crest/CrestBL3_5.png'},
    {'name': 'resources/Crest/CrestBL3_6.png', 'path': 'resources/Crest/CrestBL3_6.png'},
    {'name': 'resources/Crest/CrestBL4_4.png', 'path': 'resources/Crest/CrestBL4_4.png'},
    {'name': 'resources/Crest/CrestBL4_5.png', 'path': 'resources/Crest/CrestBL4_5.png'},
    {'name': 'resources/Crest/CrestBL4_6.png', 'path': 'resources/Crest/CrestBL4_6.png'},
    {'name': 'resources/Crest/CrestTR1J10_4.png', 'path': 'resources/Crest/CrestTR1J10_4.png'},
    {'name': 'resources/Crest/CrestTR1J10_5.png', 'path': 'resources/Crest/CrestTR1J10_5.png'},
    {'name': 'resources/Crest/CrestTR1J10_6.png', 'path': 'resources/Crest/CrestTR1J10_6.png'},
    {'name': 'resources/Crest/CrestTR2J10_4.png', 'path': 'resources/Crest/CrestTR2J10_4.png'},
    {'name': 'resources/Crest/CrestTR2J10_5.png', 'path': 'resources/Crest/CrestTR2J10_5.png'},
    {'name': 'resources/Crest/CrestTR2J10_6.png', 'path': 'resources/Crest/CrestTR2J10_6.png'},
    {'name': 'resources/Crest/CrestTR3J10_4.png', 'path': 'resources/Crest/CrestTR3J10_4.png'},
    {'name': 'resources/Crest/CrestTR3J10_5.png', 'path': 'resources/Crest/CrestTR3J10_5.png'},
    {'name': 'resources/Crest/CrestTR3J10_6.png', 'path': 'resources/Crest/CrestTR3J10_6.png'},
    {'name': 'resources/Crest/CrestTR4J10_4.png', 'path': 'resources/Crest/CrestTR4J10_4.png'},
    {'name': 'resources/Crest/CrestTR4J10_5.png', 'path': 'resources/Crest/CrestTR4J10_5.png'},
    {'name': 'resources/Crest/CrestTR4J10_6.png', 'path': 'resources/Crest/CrestTR4J10_6.png'},
    {'name': 'resources/Crest/CrestBL1J10_4.png', 'path': 'resources/Crest/CrestBL1J10_4.png'},
    {'name': 'resources/Crest/CrestBL1J10_5.png', 'path': 'resources/Crest/CrestBL1J10_5.png'},
    {'name': 'resources/Crest/CrestBL1J10_6.png', 'path': 'resources/Crest/CrestBL1J10_6.png'},
    {'name': 'resources/Crest/CrestBL2J10_4.png', 'path': 'resources/Crest/CrestBL2J10_4.png'},
    {'name': 'resources/Crest/CrestBL2J10_5.png', 'path': 'resources/Crest/CrestBL2J10_5.png'},
    {'name': 'resources/Crest/CrestBL2J10_6.png', 'path': 'resources/Crest/CrestBL2J10_6.png'},
    {'name': 'resources/Crest/CrestBL3J10_4.png', 'path': 'resources/Crest/CrestBL3J10_4.png'},
    {'name': 'resources/Crest/CrestBL3J10_5.png', 'path': 'resources/Crest/CrestBL3J10_5.png'},
    {'name': 'resources/Crest/CrestBL3J10_6.png', 'path': 'resources/Crest/CrestBL3J10_6.png'},
    {'name': 'resources/Crest/CrestBL4J10_4.png', 'path': 'resources/Crest/CrestBL4J10_4.png'},
    {'name': 'resources/Crest/CrestBL4J10_5.png', 'path': 'resources/Crest/CrestBL4J10_5.png'},
    {'name': 'resources/Crest/CrestBL4J10_6.png', 'path': 'resources/Crest/CrestBL4J10_6.png'},
    {'name': 'resources/Crest/CrestTR1J20_4.png', 'path': 'resources/Crest/CrestTR1J20_4.png'},
    {'name': 'resources/Crest/CrestTR1J20_5.png', 'path': 'resources/Crest/CrestTR1J20_5.png'},
    {'name': 'resources/Crest/CrestTR1J20_6.png', 'path': 'resources/Crest/CrestTR1J20_6.png'},
    {'name': 'resources/Crest/CrestTR2J20_4.png', 'path': 'resources/Crest/CrestTR2J20_4.png'},
    {'name': 'resources/Crest/CrestTR2J20_5.png', 'path': 'resources/Crest/CrestTR2J20_5.png'},
    {'name': 'resources/Crest/CrestTR2J20_6.png', 'path': 'resources/Crest/CrestTR2J20_6.png'},
    {'name': 'resources/Crest/CrestTR3J20_4.png', 'path': 'resources/Crest/CrestTR3J20_4.png'},
    {'name': 'resources/Crest/CrestTR3J20_5.png', 'path': 'resources/Crest/CrestTR3J20_5.png'},
    {'name': 'resources/Crest/CrestTR3J20_6.png', 'path': 'resources/Crest/CrestTR3J20_6.png'},
    {'name': 'resources/Crest/CrestTR4J20_4.png', 'path': 'resources/Crest/CrestTR4J20_4.png'},
    {'name': 'resources/Crest/CrestTR4J20_5.png', 'path': 'resources/Crest/CrestTR4J20_5.png'},
    {'name': 'resources/Crest/CrestTR4J20_6.png', 'path': 'resources/Crest/CrestTR4J20_6.png'},
    {'name': 'resources/Crest/CrestBL1J20_4.png', 'path': 'resources/Crest/CrestBL1J20_4.png'},
    {'name': 'resources/Crest/CrestBL1J20_5.png', 'path': 'resources/Crest/CrestBL1J20_5.png'},
    {'name': 'resources/Crest/CrestBL1J20_6.png', 'path': 'resources/Crest/CrestBL1J20_6.png'},
    {'name': 'resources/Crest/CrestBL2J20_4.png', 'path': 'resources/Crest/CrestBL2J20_4.png'},
    {'name': 'resources/Crest/CrestBL2J20_5.png', 'path': 'resources/Crest/CrestBL2J20_5.png'},
    {'name': 'resources/Crest/CrestBL2J20_6.png', 'path': 'resources/Crest/CrestBL2J20_6.png'},
    {'name': 'resources/Crest/CrestBL3J20_4.png', 'path': 'resources/Crest/CrestBL3J20_4.png'},
    {'name': 'resources/Crest/CrestBL3J20_5.png', 'path': 'resources/Crest/CrestBL3J20_5.png'},
    {'name': 'resources/Crest/CrestBL3J20_6.png', 'path': 'resources/Crest/CrestBL3J20_6.png'},
    {'name': 'resources/Crest/CrestBL4J20_4.png', 'path': 'resources/Crest/CrestBL4J20_4.png'},
    {'name': 'resources/Crest/CrestBL4J20_5.png', 'path': 'resources/Crest/CrestBL4J20_5.png'},
    {'name': 'resources/Crest/CrestBL4J20_6.png', 'path': 'resources/Crest/CrestBL4J20_6.png'},
    {'name': 'resources/Line/LineTR1_4.png', 'path': 'resources/Line/LineTR1_4.png'},
    {'name': 'resources/Line/LineTR1_5.png', 'path': 'resources/Line/LineTR1_5.png'},
    {'name': 'resources/Line/LineTR1_6.png', 'path': 'resources/Line/LineTR1_6.png'},
    {'name': 'resources/Line/LineTR2_4.png', 'path': 'resources/Line/LineTR2_4.png'},
    {'name': 'resources/Line/LineTR2_5.png', 'path': 'resources/Line/LineTR2_5.png'},
    {'name': 'resources/Line/LineTR2_6.png', 'path': 'resources/Line/LineTR2_6.png'},
    {'name': 'resources/Line/LineTR3_4.png', 'path': 'resources/Line/LineTR3_4.png'},
    {'name': 'resources/Line/LineTR3_5.png', 'path': 'resources/Line/LineTR3_5.png'},
    {'name': 'resources/Line/LineTR3_6.png', 'path': 'resources/Line/LineTR3_6.png'},
    {'name': 'resources/Line/LineTR4_4.png', 'path': 'resources/Line/LineTR4_4.png'},
    {'name': 'resources/Line/LineTR4_5.png', 'path': 'resources/Line/LineTR4_5.png'},
    {'name': 'resources/Line/LineTR4_6.png', 'path': 'resources/Line/LineTR4_6.png'},
    {'name': 'resources/Line/LineBL1J10_4.png', 'path': 'resources/Line/LineBL1J10_4.png'},
    {'name': 'resources/Line/LineBL1J10_5.png', 'path': 'resources/Line/LineBL1J10_5.png'},
    {'name': 'resources/Line/LineBL1J10_6.png', 'path': 'resources/Line/LineBL1J10_6.png'},
    {'name': 'resources/Line/LineBL2J10_4.png', 'path': 'resources/Line/LineBL2J10_4.png'},
    {'name': 'resources/Line/LineBL2J10_5.png', 'path': 'resources/Line/LineBL2J10_5.png'},
    {'name': 'resources/Line/LineBL2J10_6.png', 'path': 'resources/Line/LineBL2J10_6.png'},
    {'name': 'resources/Line/LineBL3J10_4.png', 'path': 'resources/Line/LineBL3J10_4.png'},
    {'name': 'resources/Line/LineBL3J10_5.png', 'path': 'resources/Line/LineBL3J10_5.png'},
    {'name': 'resources/Line/LineBL3J10_6.png', 'path': 'resources/Line/LineBL3J10_6.png'},
    {'name': 'resources/Line/LineBL4J10_4.png', 'path': 'resources/Line/LineBL4J10_4.png'},
    {'name': 'resources/Line/LineBL4J10_5.png', 'path': 'resources/Line/LineBL4J10_5.png'},
    {'name': 'resources/Line/LineBL4J10_6.png', 'path': 'resources/Line/LineBL4J10_6.png'},
    {'name': 'resources/Line/LineTR1J20_4.png', 'path': 'resources/Line/LineTR1J20_4.png'},
    {'name': 'resources/Line/LineTR1J20_5.png', 'path': 'resources/Line/LineTR1J20_5.png'},
    {'name': 'resources/Line/LineTR1J20_6.png', 'path': 'resources/Line/LineTR1J20_6.png'},
    {'name': 'resources/Line/LineTR2J20_4.png', 'path': 'resources/Line/LineTR2J20_4.png'},
    {'name': 'resources/Line/LineTR2J20_5.png', 'path': 'resources/Line/LineTR2J20_5.png'},
    {'name': 'resources/Line/LineTR2J20_6.png', 'path': 'resources/Line/LineTR2J20_6.png'},
    {'name': 'resources/Line/LineTR3J20_4.png', 'path': 'resources/Line/LineTR3J20_4.png'},
    {'name': 'resources/Line/LineTR3J20_5.png', 'path': 'resources/Line/LineTR3J20_5.png'},
    {'name': 'resources/Line/LineTR3J20_6.png', 'path': 'resources/Line/LineTR3J20_6.png'},
    {'name': 'resources/Line/LineTR4J20_4.png', 'path': 'resources/Line/LineTR4J20_4.png'},
    {'name': 'resources/Line/LineTR4J20_5.png', 'path': 'resources/Line/LineTR4J20_5.png'},
    {'name': 'resources/Line/LineTR4J20_6.png', 'path': 'resources/Line/LineTR4J20_6.png'},
    {'name': 'resources/Line/LineBL1_4.png', 'path': 'resources/Line/LineBL1_4.png'},
    {'name': 'resources/Line/LineBL1_5.png', 'path': 'resources/Line/LineBL1_5.png'},
    {'name': 'resources/Line/LineBL1_6.png', 'path': 'resources/Line/LineBL1_6.png'},
    {'name': 'resources/Line/LineBL2_4.png', 'path': 'resources/Line/LineBL2_4.png'},
    {'name': 'resources/Line/LineBL2_5.png', 'path': 'resources/Line/LineBL2_5.png'},
    {'name': 'resources/Line/LineBL2_6.png', 'path': 'resources/Line/LineBL2_6.png'},
    {'name': 'resources/Line/LineBL3_4.png', 'path': 'resources/Line/LineBL3_4.png'},
    {'name': 'resources/Line/LineBL3_5.png', 'path': 'resources/Line/LineBL3_5.png'},
    {'name': 'resources/Line/LineBL3_6.png', 'path': 'resources/Line/LineBL3_6.png'},
    {'name': 'resources/Line/LineBL4_4.png', 'path': 'resources/Line/LineBL4_4.png'},
    {'name': 'resources/Line/LineBL4_5.png', 'path': 'resources/Line/LineBL4_5.png'},
    {'name': 'resources/Line/LineBL4_6.png', 'path': 'resources/Line/LineBL4_6.png'},
    {'name': 'resources/Line/LineTR1J10_4.png', 'path': 'resources/Line/LineTR1J10_4.png'},
    {'name': 'resources/Line/LineTR1J10_5.png', 'path': 'resources/Line/LineTR1J10_5.png'},
    {'name': 'resources/Line/LineTR1J10_6.png', 'path': 'resources/Line/LineTR1J10_6.png'},
    {'name': 'resources/Line/LineTR2J10_4.png', 'path': 'resources/Line/LineTR2J10_4.png'},
    {'name': 'resources/Line/LineTR2J10_5.png', 'path': 'resources/Line/LineTR2J10_5.png'},
    {'name': 'resources/Line/LineTR2J10_6.png', 'path': 'resources/Line/LineTR2J10_6.png'},
    {'name': 'resources/Line/LineTR3J10_4.png', 'path': 'resources/Line/LineTR3J10_4.png'},
    {'name': 'resources/Line/LineTR3J10_5.png', 'path': 'resources/Line/LineTR3J10_5.png'},
    {'name': 'resources/Line/LineTR3J10_6.png', 'path': 'resources/Line/LineTR3J10_6.png'},
    {'name': 'resources/Line/LineTR4J10_4.png', 'path': 'resources/Line/LineTR4J10_4.png'},
    {'name': 'resources/Line/LineTR4J10_5.png', 'path': 'resources/Line/LineTR4J10_5.png'},
    {'name': 'resources/Line/LineTR4J10_6.png', 'path': 'resources/Line/LineTR4J10_6.png'},
    {'name': 'resources/Line/LineBL2J20_4.png', 'path': 'resources/Line/LineBL2J20_4.png'},
    {'name': 'resources/Line/LineBL2J20_5.png', 'path': 'resources/Line/LineBL2J20_5.png'},
    {'name': 'resources/Line/LineBL2J20_6.png', 'path': 'resources/Line/LineBL2J20_6.png'},
    {'name': 'resources/Line/LineBL3J20_4.png', 'path': 'resources/Line/LineBL3J20_4.png'},
    {'name': 'resources/Line/LineBL3J20_5.png', 'path': 'resources/Line/LineBL3J20_5.png'},
    {'name': 'resources/Line/LineBL3J20_6.png', 'path': 'resources/Line/LineBL3J20_6.png'},
    {'name': 'resources/Line/LineBL4J20_4.png', 'path': 'resources/Line/LineBL4J20_4.png'},
    {'name': 'resources/Line/LineBL4J20_5.png', 'path': 'resources/Line/LineBL4J20_5.png'},
    {'name': 'resources/Line/LineBL4J20_6.png', 'path': 'resources/Line/LineBL4J20_6.png'},
    {'name': 'resources/Shapeless/NoshapeB_433.png', 'path': 'resources/Shapeless/NoshapeB_433.png'},
    {'name': 'resources/Shapeless/NoshapeB_434.png', 'path': 'resources/Shapeless/NoshapeB_434.png'},
    {'name': 'resources/Shapeless/NoshapeB_435.png', 'path': 'resources/Shapeless/NoshapeB_435.png'},
    {'name': 'resources/Shapeless/NoshapeB_436.png', 'path': 'resources/Shapeless/NoshapeB_436.png'},
    {'name': 'resources/Shapeless/NoshapeB_437.png', 'path': 'resources/Shapeless/NoshapeB_437.png'},
    {'name': 'resources/Shapeless/NoshapeB_438.png', 'path': 'resources/Shapeless/NoshapeB_438.png'},
    {'name': 'resources/Shapeless/NoshapeB_439.png', 'path': 'resources/Shapeless/NoshapeB_439.png'},
    {'name': 'resources/Shapeless/NoshapeB_440.png', 'path': 'resources/Shapeless/NoshapeB_440.png'},
    {'name': 'resources/Shapeless/NoshapeB_441.png', 'path': 'resources/Shapeless/NoshapeB_441.png'},
    {'name': 'resources/Shapeless/NoshapeB_442.png', 'path': 'resources/Shapeless/NoshapeB_442.png'},
    {'name': 'resources/Shapeless/NoshapeB_443.png', 'path': 'resources/Shapeless/NoshapeB_443.png'},
    {'name': 'resources/Shapeless/NoshapeB_444.png', 'path': 'resources/Shapeless/NoshapeB_444.png'},
    {'name': 'resources/Shapeless/NoshapeB_445.png', 'path': 'resources/Shapeless/NoshapeB_445.png'},
    {'name': 'resources/Shapeless/NoshapeB_446.png', 'path': 'resources/Shapeless/NoshapeB_446.png'},
    {'name': 'resources/Shapeless/NoshapeB_447.png', 'path': 'resources/Shapeless/NoshapeB_447.png'},
    {'name': 'resources/Shapeless/NoshapeB_448.png', 'path': 'resources/Shapeless/NoshapeB_448.png'},
    {'name': 'resources/Shapeless/NoshapeB_449.png', 'path': 'resources/Shapeless/NoshapeB_449.png'},
    {'name': 'resources/Shapeless/NoshapeB_450.png', 'path': 'resources/Shapeless/NoshapeB_450.png'},
    {'name': 'resources/Shapeless/NoshapeB_451.png', 'path': 'resources/Shapeless/NoshapeB_451.png'},
    {'name': 'resources/Shapeless/NoshapeB_452.png', 'path': 'resources/Shapeless/NoshapeB_452.png'},
    {'name': 'resources/Shapeless/NoshapeB_453.png', 'path': 'resources/Shapeless/NoshapeB_453.png'},
    {'name': 'resources/Shapeless/NoshapeB_454.png', 'path': 'resources/Shapeless/NoshapeB_454.png'},
    {'name': 'resources/Shapeless/NoshapeB_455.png', 'path': 'resources/Shapeless/NoshapeB_455.png'},
    {'name': 'resources/Shapeless/NoshapeB_456.png', 'path': 'resources/Shapeless/NoshapeB_456.png'},
    {'name': 'resources/Shapeless/NoshapeB_457.png', 'path': 'resources/Shapeless/NoshapeB_457.png'},
    {'name': 'resources/Shapeless/NoshapeB_458.png', 'path': 'resources/Shapeless/NoshapeB_458.png'},
    {'name': 'resources/Shapeless/NoshapeB_459.png', 'path': 'resources/Shapeless/NoshapeB_459.png'},
    {'name': 'resources/Shapeless/NoshapeB_460.png', 'path': 'resources/Shapeless/NoshapeB_460.png'},
    {'name': 'resources/Shapeless/NoshapeB_461.png', 'path': 'resources/Shapeless/NoshapeB_461.png'},
    {'name': 'resources/Shapeless/NoshapeB_462.png', 'path': 'resources/Shapeless/NoshapeB_462.png'},
    {'name': 'resources/Shapeless/NoshapeB_463.png', 'path': 'resources/Shapeless/NoshapeB_463.png'},
    {'name': 'resources/Shapeless/NoshapeB_464.png', 'path': 'resources/Shapeless/NoshapeB_464.png'},
    {'name': 'resources/Shapeless/NoshapeB_465.png', 'path': 'resources/Shapeless/NoshapeB_465.png'},
    {'name': 'resources/Shapeless/NoshapeB_466.png', 'path': 'resources/Shapeless/NoshapeB_466.png'},
    {'name': 'resources/Shapeless/NoshapeB_467.png', 'path': 'resources/Shapeless/NoshapeB_467.png'},
    {'name': 'resources/Shapeless/NoshapeB_468.png', 'path': 'resources/Shapeless/NoshapeB_468.png'},
    {'name': 'resources/Shapeless/NoshapeB_469.png', 'path': 'resources/Shapeless/NoshapeB_469.png'},
    {'name': 'resources/Shapeless/NoshapeB_470.png', 'path': 'resources/Shapeless/NoshapeB_470.png'},
    {'name': 'resources/Shapeless/NoshapeB_471.png', 'path': 'resources/Shapeless/NoshapeB_471.png'},
    {'name': 'resources/Shapeless/NoshapeB_472.png', 'path': 'resources/Shapeless/NoshapeB_472.png'},
    {'name': 'resources/Shapeless/NoshapeB_473.png', 'path': 'resources/Shapeless/NoshapeB_473.png'},
    {'name': 'resources/Shapeless/NoshapeB_474.png', 'path': 'resources/Shapeless/NoshapeB_474.png'},
    {'name': 'resources/Shapeless/NoshapeB_475.png', 'path': 'resources/Shapeless/NoshapeB_475.png'},
    {'name': 'resources/Shapeless/NoshapeB_476.png', 'path': 'resources/Shapeless/NoshapeB_476.png'},
    {'name': 'resources/Shapeless/NoshapeB_477.png', 'path': 'resources/Shapeless/NoshapeB_477.png'},
    {'name': 'resources/Shapeless/NoshapeB_478.png', 'path': 'resources/Shapeless/NoshapeB_478.png'},
    {'name': 'resources/Shapeless/NoshapeB_479.png', 'path': 'resources/Shapeless/NoshapeB_479.png'},
    {'name': 'resources/Shapeless/NoshapeB_480.png', 'path': 'resources/Shapeless/NoshapeB_480.png'},
    {'name': 'resources/Shapeless/NoshapeB_481.png', 'path': 'resources/Shapeless/NoshapeB_481.png'},
    {'name': 'resources/Shapeless/NoshapeB_482.png', 'path': 'resources/Shapeless/NoshapeB_482.png'},
    {'name': 'resources/Shapeless/NoshapeB_483.png', 'path': 'resources/Shapeless/NoshapeB_483.png'},
    {'name': 'resources/Shapeless/NoshapeB_484.png', 'path': 'resources/Shapeless/NoshapeB_484.png'},
    {'name': 'resources/Shapeless/NoshapeB_485.png', 'path': 'resources/Shapeless/NoshapeB_485.png'},
    {'name': 'resources/Shapeless/NoshapeB_486.png', 'path': 'resources/Shapeless/NoshapeB_486.png'},
    {'name': 'resources/Shapeless/NoshapeB_487.png', 'path': 'resources/Shapeless/NoshapeB_487.png'},
    {'name': 'resources/Shapeless/NoshapeB_488.png', 'path': 'resources/Shapeless/NoshapeB_488.png'},
    {'name': 'resources/Shapeless/NoshapeB_489.png', 'path': 'resources/Shapeless/NoshapeB_489.png'},
    {'name': 'resources/Shapeless/NoshapeB_490.png', 'path': 'resources/Shapeless/NoshapeB_490.png'},
    {'name': 'resources/Shapeless/NoshapeB_491.png', 'path': 'resources/Shapeless/NoshapeB_491.png'},
    {'name': 'resources/Shapeless/NoshapeB_492.png', 'path': 'resources/Shapeless/NoshapeB_492.png'},
    {'name': 'resources/Shapeless/NoshapeB_493.png', 'path': 'resources/Shapeless/NoshapeB_493.png'},
    {'name': 'resources/Shapeless/NoshapeB_494.png', 'path': 'resources/Shapeless/NoshapeB_494.png'},
    {'name': 'resources/Shapeless/NoshapeB_495.png', 'path': 'resources/Shapeless/NoshapeB_495.png'},
    {'name': 'resources/Shapeless/NoshapeB_496.png', 'path': 'resources/Shapeless/NoshapeB_496.png'},
    {'name': 'resources/Shapeless/NoshapeB_497.png', 'path': 'resources/Shapeless/NoshapeB_497.png'},
    {'name': 'resources/Shapeless/NoshapeB_498.png', 'path': 'resources/Shapeless/NoshapeB_498.png'},
    {'name': 'resources/Shapeless/NoshapeB_499.png', 'path': 'resources/Shapeless/NoshapeB_499.png'},
    {'name': 'resources/Shapeless/NoshapeB_500.png', 'path': 'resources/Shapeless/NoshapeB_500.png'},
    {'name': 'resources/Shapeless/NoshapeB_501.png', 'path': 'resources/Shapeless/NoshapeB_501.png'},
    {'name': 'resources/Shapeless/NoshapeB_502.png', 'path': 'resources/Shapeless/NoshapeB_502.png'},
    {'name': 'resources/Shapeless/NoshapeB_503.png', 'path': 'resources/Shapeless/NoshapeB_503.png'},
    {'name': 'resources/Shapeless/NoshapeB_504.png', 'path': 'resources/Shapeless/NoshapeB_504.png'},
    {'name': 'resources/Shapeless/NoshapeB_505.png', 'path': 'resources/Shapeless/NoshapeB_505.png'},
    {'name': 'resources/Shapeless/NoshapeB_506.png', 'path': 'resources/Shapeless/NoshapeB_506.png'},
    {'name': 'resources/Shapeless/NoshapeB_507.png', 'path': 'resources/Shapeless/NoshapeB_507.png'},
    {'name': 'resources/Shapeless/NoshapeB_508.png', 'path': 'resources/Shapeless/NoshapeB_508.png'},
    {'name': 'resources/Shapeless/NoshapeB_509.png', 'path': 'resources/Shapeless/NoshapeB_509.png'},
    {'name': 'resources/Shapeless/NoshapeB_510.png', 'path': 'resources/Shapeless/NoshapeB_510.png'},
    {'name': 'resources/Shapeless/NoshapeB_511.png', 'path': 'resources/Shapeless/NoshapeB_511.png'},
    {'name': 'resources/Shapeless/NoshapeB_512.png', 'path': 'resources/Shapeless/NoshapeB_512.png'},
    {'name': 'resources/Shapeless/NoshapeB_513.png', 'path': 'resources/Shapeless/NoshapeB_513.png'},
    {'name': 'resources/Shapeless/NoshapeB_514.png', 'path': 'resources/Shapeless/NoshapeB_514.png'},
    {'name': 'resources/Shapeless/NoshapeB_515.png', 'path': 'resources/Shapeless/NoshapeB_515.png'},
    {'name': 'resources/Shapeless/NoshapeB_516.png', 'path': 'resources/Shapeless/NoshapeB_516.png'},
    {'name': 'resources/Shapeless/NoshapeB_517.png', 'path': 'resources/Shapeless/NoshapeB_517.png'},
    {'name': 'resources/Shapeless/NoshapeB_518.png', 'path': 'resources/Shapeless/NoshapeB_518.png'},
    {'name': 'resources/Shapeless/NoshapeB_519.png', 'path': 'resources/Shapeless/NoshapeB_519.png'},
    {'name': 'resources/Shapeless/NoshapeB_520.png', 'path': 'resources/Shapeless/NoshapeB_520.png'},
    {'name': 'resources/Shapeless/NoshapeB_521.png', 'path': 'resources/Shapeless/NoshapeB_521.png'},
    {'name': 'resources/Shapeless/NoshapeB_522.png', 'path': 'resources/Shapeless/NoshapeB_522.png'},
    {'name': 'resources/Shapeless/NoshapeB_523.png', 'path': 'resources/Shapeless/NoshapeB_523.png'},
    {'name': 'resources/Shapeless/NoshapeB_524.png', 'path': 'resources/Shapeless/NoshapeB_524.png'},
    {'name': 'resources/Shapeless/NoshapeB_525.png', 'path': 'resources/Shapeless/NoshapeB_525.png'},
    {'name': 'resources/Shapeless/NoshapeB_526.png', 'path': 'resources/Shapeless/NoshapeB_526.png'},
    {'name': 'resources/Shapeless/NoshapeB_527.png', 'path': 'resources/Shapeless/NoshapeB_527.png'},
    {'name': 'resources/Shapeless/NoshapeB_528.png', 'path': 'resources/Shapeless/NoshapeB_528.png'},
    {'name': 'resources/Shapeless/NoshapeB_529.png', 'path': 'resources/Shapeless/NoshapeB_529.png'},
    {'name': 'resources/Shapeless/NoshapeB_530.png', 'path': 'resources/Shapeless/NoshapeB_530.png'},
    {'name': 'resources/Shapeless/NoshapeB_531.png', 'path': 'resources/Shapeless/NoshapeB_531.png'},
    {'name': 'resources/Shapeless/NoshapeB_532.png', 'path': 'resources/Shapeless/NoshapeB_532.png'},
    {'name': 'resources/Shapeless/NoshapeB_533.png', 'path': 'resources/Shapeless/NoshapeB_533.png'},
    {'name': 'resources/Shapeless/NoshapeB_534.png', 'path': 'resources/Shapeless/NoshapeB_534.png'},
    {'name': 'resources/Shapeless/NoshapeB_535.png', 'path': 'resources/Shapeless/NoshapeB_535.png'},
    {'name': 'resources/Shapeless/NoshapeB_536.png', 'path': 'resources/Shapeless/NoshapeB_536.png'},
    {'name': 'resources/Shapeless/NoshapeB_537.png', 'path': 'resources/Shapeless/NoshapeB_537.png'},
    {'name': 'resources/Shapeless/NoshapeB_538.png', 'path': 'resources/Shapeless/NoshapeB_538.png'},
    {'name': 'resources/Shapeless/NoshapeB_539.png', 'path': 'resources/Shapeless/NoshapeB_539.png'},
    {'name': 'resources/Shapeless/NoshapeB_540.png', 'path': 'resources/Shapeless/NoshapeB_540.png'},
    {'name': 'resources/Shapeless/NoshapeB_541.png', 'path': 'resources/Shapeless/NoshapeB_541.png'},
    {'name': 'resources/Shapeless/NoshapeB_542.png', 'path': 'resources/Shapeless/NoshapeB_542.png'},
    {'name': 'resources/Shapeless/NoshapeB_543.png', 'path': 'resources/Shapeless/NoshapeB_543.png'},
    {'name': 'resources/Shapeless/NoshapeB_544.png', 'path': 'resources/Shapeless/NoshapeB_544.png'},
    {'name': 'resources/Shapeless/NoshapeB_545.png', 'path': 'resources/Shapeless/NoshapeB_545.png'},
    {'name': 'resources/Shapeless/NoshapeB_546.png', 'path': 'resources/Shapeless/NoshapeB_546.png'},
    {'name': 'resources/Shapeless/NoshapeB_547.png', 'path': 'resources/Shapeless/NoshapeB_547.png'},
    {'name': 'resources/Shapeless/NoshapeB_548.png', 'path': 'resources/Shapeless/NoshapeB_548.png'},
    {'name': 'resources/Shapeless/NoshapeB_549.png', 'path': 'resources/Shapeless/NoshapeB_549.png'},
    {'name': 'resources/Shapeless/NoshapeB_550.png', 'path': 'resources/Shapeless/NoshapeB_550.png'},
    {'name': 'resources/Shapeless/NoshapeB_551.png', 'path': 'resources/Shapeless/NoshapeB_551.png'},
    {'name': 'resources/Shapeless/NoshapeB_552.png', 'path': 'resources/Shapeless/NoshapeB_552.png'},
    {'name': 'resources/Shapeless/NoshapeB_553.png', 'path': 'resources/Shapeless/NoshapeB_553.png'},
    {'name': 'resources/Shapeless/NoshapeB_554.png', 'path': 'resources/Shapeless/NoshapeB_554.png'},
    {'name': 'resources/Shapeless/NoshapeB_555.png', 'path': 'resources/Shapeless/NoshapeB_555.png'},
    {'name': 'resources/Shapeless/NoshapeB_556.png', 'path': 'resources/Shapeless/NoshapeB_556.png'},
    {'name': 'resources/Shapeless/NoshapeB_557.png', 'path': 'resources/Shapeless/NoshapeB_557.png'},
    {'name': 'resources/Shapeless/NoshapeB_558.png', 'path': 'resources/Shapeless/NoshapeB_558.png'},
    {'name': 'resources/Shapeless/NoshapeB_559.png', 'path': 'resources/Shapeless/NoshapeB_559.png'},
    {'name': 'resources/Shapeless/NoshapeB_560.png', 'path': 'resources/Shapeless/NoshapeB_560.png'},
    {'name': 'resources/Shapeless/NoshapeB_561.png', 'path': 'resources/Shapeless/NoshapeB_561.png'},
    {'name': 'resources/Shapeless/NoshapeB_562.png', 'path': 'resources/Shapeless/NoshapeB_562.png'},
    {'name': 'resources/Shapeless/NoshapeB_563.png', 'path': 'resources/Shapeless/NoshapeB_563.png'},
    {'name': 'resources/Shapeless/NoshapeB_564.png', 'path': 'resources/Shapeless/NoshapeB_564.png'},
    {'name': 'resources/Shapeless/NoshapeB_565.png', 'path': 'resources/Shapeless/NoshapeB_565.png'},
    {'name': 'resources/Shapeless/NoshapeB_566.png', 'path': 'resources/Shapeless/NoshapeB_566.png'},
    {'name': 'resources/Shapeless/NoshapeB_567.png', 'path': 'resources/Shapeless/NoshapeB_567.png'},
    {'name': 'resources/Shapeless/NoshapeB_568.png', 'path': 'resources/Shapeless/NoshapeB_568.png'},
    {'name': 'resources/Shapeless/NoshapeB_569.png', 'path': 'resources/Shapeless/NoshapeB_569.png'},
    {'name': 'resources/Shapeless/NoshapeB_570.png', 'path': 'resources/Shapeless/NoshapeB_570.png'},
    {'name': 'resources/Shapeless/NoshapeB_571.png', 'path': 'resources/Shapeless/NoshapeB_571.png'},
    {'name': 'resources/Shapeless/NoshapeB_572.png', 'path': 'resources/Shapeless/NoshapeB_572.png'},
    {'name': 'resources/Shapeless/NoshapeB_573.png', 'path': 'resources/Shapeless/NoshapeB_573.png'},
    {'name': 'resources/Shapeless/NoshapeB_574.png', 'path': 'resources/Shapeless/NoshapeB_574.png'},
    {'name': 'resources/Shapeless/NoshapeB_575.png', 'path': 'resources/Shapeless/NoshapeB_575.png'},
    {'name': 'resources/Shapeless/NoshapeB_576.png', 'path': 'resources/Shapeless/NoshapeB_576.png'},
    {'name': 'creditCard.png', 'path': 'https://pavlovia.org/assets/default/creditCard.png'},
    {'name': 'resources/ShapePicture.png', 'path': 'resources/ShapePicture.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'resources/EasyHardLine.png', 'path': 'resources/EasyHardLine.png'},
    {'name': 'resources/EasyHardCurve.png', 'path': 'resources/EasyHardCurve.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.WARNING);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.1.1';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var Welcomescreen1Clock;
var WelcomeText1;
var SpaceQuitWS1;
var Welcomescreen2Clock;
var Welcometext2;
var key_resp;
var screen_scaleClock;
var myClock;
var oldt;
var x_size;
var y_size;
var screen_height;
var x_scale;
var y_scale;
var dbase;
var unittext;
var vsize;
var text_top;
var text_bottom;
var ccimage;
var rectangleClock;
var text;
var polygon;
var key_resp_2;
var endClock;
var text_end_screenscale;
var key_resp_3;
var TutorialscreenClock;
var text_2;
var SpaceBartut;
var ShapeShowScreenClock;
var text_3;
var key_resp_6;
var ContoursImage;
var ShapeshowScreenClock;
var NextTwoImagesText;
var EasyHardLineExample;
var EasyHardCurve;
var SummaryScreenTutClock;
var essentialsText;
var Spacebarpressendtut;
var NewblockscreenClock;
var text_5;
var key_resp_4;
var BlocktitlescreenClock;
var Blocktitletext;
var key_resp_5;
var PresentStimScreenClock;
var stimuli;
var StimFixationCross;
var ResponseScreenClock;
var FixationCrossRespScreen;
var ResponseText;
var SubjectKeyboardResponse;
var GoodbyeScreenAndFeedbackClock;
var textbox;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Welcomescreen1"
  Welcomescreen1Clock = new util.Clock();
  WelcomeText1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'WelcomeText1',
    text: 'Welcome to the Contour Detection Experiment! This experiment will last roughly 25 minutes. Please read the instructions carefully, especially if it is your first time participating. \n\nYou will need a standard creditcard sized card, glasses (if your vision needs correction), a working keyboard and a desktop monitor. Please sit comfortably at an arms length distance from your screen (60 cm).\n\nPress space to continue\nYou can press ESC to leave the experiment',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  SpaceQuitWS1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Welcomescreen2"
  Welcomescreen2Clock = new util.Clock();
  Welcometext2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Welcometext2',
    text: 'We will show an image for 0.25 seconds, after which you have to press one of the arrow keys on your keyboard. You will repeat this for about 7 minutes, this is one block. Once you reach a new block, you can take a break of max 5 minutes, there is four blocks in total. Once you start a new block, you have to finish it. \n\nBefore we continue with the tutorial, we need to scale the experiment relative to your screen size, using any standard creditcard sized card. \n\nPress space to continue',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "screen_scale"
  screen_scaleClock = new util.Clock();
  // Run 'Begin Experiment' code from code_both
  myClock = new util.Clock();
  
  // Run 'Begin Experiment' code from code_scale
  oldt = 0;
  x_size = 8.56;
  y_size = 5.398;
  screen_height = 0;
  if ((psychoJS.window.units === "norm")) {
      x_scale = 0.05;
      y_scale = 0.1;
      dbase = 0.0001;
      unittext = " norm units";
      vsize = 2;
  } else {
      if ((psychoJS.window.units === "pix")) {
          x_scale = 60;
          y_scale = 40;
          dbase = 0.1;
          unittext = " pixels";
          vsize = psychoJS.window.size[1];
      } else {
          x_scale = 0.05;
          y_scale = 0.05;
          dbase = 0.0001;
          unittext = " height units";
          vsize = 1;
      }
  }
  
  text_top = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_top',
    text: 'Resize this image to match the size of a credit card\nUp arrow for taller\nDown arrow for shorter\nLeft arrow for narrower\nRight arrow for wider',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0.7], height: 0.075,  wrapWidth: 1.5, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  text_bottom = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_bottom',
    text: 'Press the space bar when done',
    font: 'Arial',
    units: 'norm', 
    pos: [0, (- 0.6)], height: 0.075,  wrapWidth: 1.5, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  ccimage = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ccimage', units : undefined, 
    image : 'creditCard.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0, 0], size : [(x_size * x_scale), (y_size * y_scale)],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -4.0 
  });
  // Initialize components for Routine "rectangle"
  rectangleClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Arial',
    units: 'norm', 
    pos: [0, (- 0.8)], height: 0.1,  wrapWidth: 1.5, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  polygon = new visual.Rect ({
    win: psychoJS.window, name: 'polygon', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  text_end_screenscale = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_end_screenscale',
    text: 'Screen scaling complete\n\nPress space to continue with the tutorial\n',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], height: 0.1,  wrapWidth: 1.8, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Tutorialscreen"
  TutorialscreenClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: "You have to keep your eyes focused on the center of the image, do not move your gaze during the experiment. For every repetition an image will be briefly presented, after which you will respond by pressing the left arrow key or the right arrow key once. You are encouraged to answer as fast as possible while trying to be as accurate as possible. You can resond right after the image has been shown. You won't be given feedback on your performance during the experiment.\nIn the next screen we will show you the two contours to detect, and an example of varying difficulty. \n\nPress space to continue",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  SpaceBartut = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ShapeShowScreen"
  ShapeShowScreenClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'You have to detect the following contours: \nPress space to continue',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (+ 0.2)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  ContoursImage = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ContoursImage', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, (- 0.1)], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "ShapeshowScreen"
  ShapeshowScreenClock = new util.Clock();
  NextTwoImagesText = new visual.TextStim({
    win: psychoJS.window,
    name: 'NextTwoImagesText',
    text: 'The next two images show the difficulty levels. By varying the alignment of the shapes we will make it harder.  \nRemember that the shape location varies slightly each time, but if present will always be present in one of the two corners. We will never show you a shape in the middle part of the screen',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  EasyHardLineExample = new visual.ImageStim({
    win : psychoJS.window,
    name : 'EasyHardLineExample', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 1.0, pos : [0, 0], size : 1.0,
    color : new util.Color('white'), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  EasyHardCurve = new visual.ImageStim({
    win : psychoJS.window,
    name : 'EasyHardCurve', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 1.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "SummaryScreenTut"
  SummaryScreenTutClock = new util.Clock();
  essentialsText = new visual.TextStim({
    win: psychoJS.window,
    name: 'essentialsText',
    text: "press left arrow for no contour present, right arrow for contour present\nanswer as soon as possible, you can answer before the text appears\nKeep your eyes on the center cross, and maintain attention throughout\nStay 60 cm from the screen (arms length), don't move too much\nTarget shape location and difficulty varies randomly\nThe contour will be presented randomly in two corners of the screen per block\nIf something goes wrong, write it in the feedback form at the end. \n\nPress space to continue\n",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  Spacebarpressendtut = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Newblockscreen"
  NewblockscreenClock = new util.Clock();
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Blocktitlescreen"
  BlocktitlescreenClock = new util.Clock();
  Blocktitletext = new visual.TextStim({
    win: psychoJS.window,
    name: 'Blocktitletext',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "PresentStimScreen"
  PresentStimScreenClock = new util.Clock();
  stimuli = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stimuli', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  StimFixationCross = new visual.ShapeStim ({
    win: psychoJS.window, name: 'StimFixationCross', 
    vertices: 'cross', size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  // Initialize components for Routine "ResponseScreen"
  ResponseScreenClock = new util.Clock();
  FixationCrossRespScreen = new visual.ShapeStim ({
    win: psychoJS.window, name: 'FixationCrossRespScreen', 
    vertices: 'cross', size:[1.0, 1.0],
    ori: 1.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  ResponseText = new visual.TextStim({
    win: psychoJS.window,
    name: 'ResponseText',
    text: '\n\n\nContour present?\nleft (no) right (yes)',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  SubjectKeyboardResponse = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "GoodbyeScreenAndFeedback"
  GoodbyeScreenAndFeedbackClock = new util.Clock();
  textbox = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox',
    text: 'Thank you for participating!\nPlease report any issues or comments here.\npress ESC to exit the experiment',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _SpaceQuitWS1_allKeys;
var Welcomescreen1Components;
function Welcomescreen1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Welcomescreen1' ---
    t = 0;
    Welcomescreen1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Welcomescreen1.started', globalClock.getTime());
    SpaceQuitWS1.keys = undefined;
    SpaceQuitWS1.rt = undefined;
    _SpaceQuitWS1_allKeys = [];
    // keep track of which components have finished
    Welcomescreen1Components = [];
    Welcomescreen1Components.push(WelcomeText1);
    Welcomescreen1Components.push(SpaceQuitWS1);
    
    for (const thisComponent of Welcomescreen1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Welcomescreen1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Welcomescreen1' ---
    // get current time
    t = Welcomescreen1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *WelcomeText1* updates
    if (t >= 0.0 && WelcomeText1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      WelcomeText1.tStart = t;  // (not accounting for frame time here)
      WelcomeText1.frameNStart = frameN;  // exact frame index
      
      WelcomeText1.setAutoDraw(true);
    }
    
    
    // *SpaceQuitWS1* updates
    if (t >= 0.0 && SpaceQuitWS1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SpaceQuitWS1.tStart = t;  // (not accounting for frame time here)
      SpaceQuitWS1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { SpaceQuitWS1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { SpaceQuitWS1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { SpaceQuitWS1.clearEvents(); });
    }
    
    if (SpaceQuitWS1.status === PsychoJS.Status.STARTED) {
      let theseKeys = SpaceQuitWS1.getKeys({keyList: ['space'], waitRelease: false});
      _SpaceQuitWS1_allKeys = _SpaceQuitWS1_allKeys.concat(theseKeys);
      if (_SpaceQuitWS1_allKeys.length > 0) {
        SpaceQuitWS1.keys = _SpaceQuitWS1_allKeys[_SpaceQuitWS1_allKeys.length - 1].name;  // just the last key pressed
        SpaceQuitWS1.rt = _SpaceQuitWS1_allKeys[_SpaceQuitWS1_allKeys.length - 1].rt;
        SpaceQuitWS1.duration = _SpaceQuitWS1_allKeys[_SpaceQuitWS1_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Welcomescreen1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Welcomescreen1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Welcomescreen1' ---
    for (const thisComponent of Welcomescreen1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Welcomescreen1.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(SpaceQuitWS1.corr, level);
    }
    psychoJS.experiment.addData('SpaceQuitWS1.keys', SpaceQuitWS1.keys);
    if (typeof SpaceQuitWS1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('SpaceQuitWS1.rt', SpaceQuitWS1.rt);
        psychoJS.experiment.addData('SpaceQuitWS1.duration', SpaceQuitWS1.duration);
        routineTimer.reset();
        }
    
    SpaceQuitWS1.stop();
    // the Routine "Welcomescreen1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_allKeys;
var Welcomescreen2Components;
function Welcomescreen2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Welcomescreen2' ---
    t = 0;
    Welcomescreen2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Welcomescreen2.started', globalClock.getTime());
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    Welcomescreen2Components = [];
    Welcomescreen2Components.push(Welcometext2);
    Welcomescreen2Components.push(key_resp);
    
    for (const thisComponent of Welcomescreen2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Welcomescreen2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Welcomescreen2' ---
    // get current time
    t = Welcomescreen2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Welcometext2* updates
    if (t >= 0.0 && Welcometext2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Welcometext2.tStart = t;  // (not accounting for frame time here)
      Welcometext2.frameNStart = frameN;  // exact frame index
      
      Welcometext2.setAutoDraw(true);
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Welcomescreen2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Welcomescreen2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Welcomescreen2' ---
    for (const thisComponent of Welcomescreen2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Welcomescreen2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "Welcomescreen2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var screen_scaleComponents;
function screen_scaleRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'screen_scale' ---
    t = 0;
    screen_scaleClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('screen_scale.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_scale
    psychoJS.eventManager.clearEvents();
    
    // keep track of which components have finished
    screen_scaleComponents = [];
    screen_scaleComponents.push(text_top);
    screen_scaleComponents.push(text_bottom);
    screen_scaleComponents.push(ccimage);
    
    for (const thisComponent of screen_scaleComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var _pj;
var keys;
var dscale;
function screen_scaleRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'screen_scale' ---
    // get current time
    t = screen_scaleClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_scale
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    keys = psychoJS.eventManager.getKeys();
    if (keys.length) {
        if (((t - oldt) < 0.5)) {
            dscale = (5 * dbase);
            oldt = t;
        } else {
            dscale = dbase;
            oldt = t;
        }
        if ((_pj.in_es6("space", keys) && (t > 1))) {
            continueRoutine = false;
        } else {
            if (_pj.in_es6("up", keys)) {
                y_scale = (util.round(((y_scale + dscale) * 10000)) / 10000);
            } else {
                if (_pj.in_es6("down", keys)) {
                    y_scale = (util.round(((y_scale - dscale) * 10000)) / 10000);
                } else {
                    if (_pj.in_es6("left", keys)) {
                        x_scale = (util.round(((x_scale - dscale) * 10000)) / 10000);
                    } else {
                        if (_pj.in_es6("right", keys)) {
                            x_scale = (util.round(((x_scale + dscale) * 10000)) / 10000);
                        }
                    }
                }
            }
        }
        screen_height = (util.round(((vsize * 10) / y_scale)) / 10);
        text_bottom.text = (((((((("X Scale = " + x_scale.toString()) + unittext) + " per cm, Y Scale = ") + y_scale.toString()) + unittext) + " per cm\nScreen height = ") + screen_height.toString()) + " cm\n\nPress the space bar when done");
        ccimage.size = [(x_size * x_scale), (y_size * y_scale)];
    }
    
    
    // *text_top* updates
    if (t >= 0.0 && text_top.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_top.tStart = t;  // (not accounting for frame time here)
      text_top.frameNStart = frameN;  // exact frame index
      
      text_top.setAutoDraw(true);
    }
    
    
    // *text_bottom* updates
    if (t >= 0.0 && text_bottom.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_bottom.tStart = t;  // (not accounting for frame time here)
      text_bottom.frameNStart = frameN;  // exact frame index
      
      text_bottom.setAutoDraw(true);
    }
    
    
    // *ccimage* updates
    if (t >= 0.0 && ccimage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ccimage.tStart = t;  // (not accounting for frame time here)
      ccimage.frameNStart = frameN;  // exact frame index
      
      ccimage.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of screen_scaleComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function screen_scaleRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'screen_scale' ---
    for (const thisComponent of screen_scaleComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('screen_scale.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_scale
    psychoJS.experiment.addData("X Scale", x_scale);
    psychoJS.experiment.addData("Y Scale", y_scale);
    
    // the Routine "screen_scale" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_2_allKeys;
var rectangleComponents;
function rectangleRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'rectangle' ---
    t = 0;
    rectangleClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('rectangle.started', globalClock.getTime());
    text.setText('This shape should be a 10 cm square.\n\nPress space to continue');
    polygon.setSize([(10 * x_scale), (10 * y_scale)]);
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    rectangleComponents = [];
    rectangleComponents.push(text);
    rectangleComponents.push(polygon);
    rectangleComponents.push(key_resp_2);
    
    for (const thisComponent of rectangleComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function rectangleRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'rectangle' ---
    // get current time
    t = rectangleClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // *polygon* updates
    if (t >= 0.0 && polygon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon.tStart = t;  // (not accounting for frame time here)
      polygon.frameNStart = frameN;  // exact frame index
      
      polygon.setAutoDraw(true);
    }
    
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }
    
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of rectangleComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function rectangleRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'rectangle' ---
    for (const thisComponent of rectangleComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('rectangle.stopped', globalClock.getTime());
    key_resp_2.stop();
    // the Routine "rectangle" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_3_allKeys;
var endComponents;
function endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end' ---
    t = 0;
    endClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('end.started', globalClock.getTime());
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(text_end_screenscale);
    endComponents.push(key_resp_3);
    
    for (const thisComponent of endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end' ---
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_end_screenscale* updates
    if (t >= 0.0 && text_end_screenscale.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_end_screenscale.tStart = t;  // (not accounting for frame time here)
      text_end_screenscale.frameNStart = frameN;  // exact frame index
      
      text_end_screenscale.setAutoDraw(true);
    }
    
    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }
    
    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        key_resp_3.duration = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end' ---
    for (const thisComponent of endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('end.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_3.corr, level);
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        psychoJS.experiment.addData('key_resp_3.duration', key_resp_3.duration);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _SpaceBartut_allKeys;
var TutorialscreenComponents;
function TutorialscreenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Tutorialscreen' ---
    t = 0;
    TutorialscreenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Tutorialscreen.started', globalClock.getTime());
    SpaceBartut.keys = undefined;
    SpaceBartut.rt = undefined;
    _SpaceBartut_allKeys = [];
    // keep track of which components have finished
    TutorialscreenComponents = [];
    TutorialscreenComponents.push(text_2);
    TutorialscreenComponents.push(SpaceBartut);
    
    for (const thisComponent of TutorialscreenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function TutorialscreenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Tutorialscreen' ---
    // get current time
    t = TutorialscreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    
    // *SpaceBartut* updates
    if (t >= 0.0 && SpaceBartut.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SpaceBartut.tStart = t;  // (not accounting for frame time here)
      SpaceBartut.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { SpaceBartut.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { SpaceBartut.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { SpaceBartut.clearEvents(); });
    }
    
    if (SpaceBartut.status === PsychoJS.Status.STARTED) {
      let theseKeys = SpaceBartut.getKeys({keyList: ['space'], waitRelease: false});
      _SpaceBartut_allKeys = _SpaceBartut_allKeys.concat(theseKeys);
      if (_SpaceBartut_allKeys.length > 0) {
        SpaceBartut.keys = _SpaceBartut_allKeys[_SpaceBartut_allKeys.length - 1].name;  // just the last key pressed
        SpaceBartut.rt = _SpaceBartut_allKeys[_SpaceBartut_allKeys.length - 1].rt;
        SpaceBartut.duration = _SpaceBartut_allKeys[_SpaceBartut_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TutorialscreenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TutorialscreenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Tutorialscreen' ---
    for (const thisComponent of TutorialscreenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Tutorialscreen.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(SpaceBartut.corr, level);
    }
    psychoJS.experiment.addData('SpaceBartut.keys', SpaceBartut.keys);
    if (typeof SpaceBartut.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('SpaceBartut.rt', SpaceBartut.rt);
        psychoJS.experiment.addData('SpaceBartut.duration', SpaceBartut.duration);
        routineTimer.reset();
        }
    
    SpaceBartut.stop();
    // the Routine "Tutorialscreen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_6_allKeys;
var ShapeShowScreenComponents;
function ShapeShowScreenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ShapeShowScreen' ---
    t = 0;
    ShapeShowScreenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('ShapeShowScreen.started', globalClock.getTime());
    key_resp_6.keys = undefined;
    key_resp_6.rt = undefined;
    _key_resp_6_allKeys = [];
    ContoursImage.setSize([(10 * x_scale), (7 * y_scale)]);
    ContoursImage.setImage('resources/ShapePicture.png');
    // keep track of which components have finished
    ShapeShowScreenComponents = [];
    ShapeShowScreenComponents.push(text_3);
    ShapeShowScreenComponents.push(key_resp_6);
    ShapeShowScreenComponents.push(ContoursImage);
    
    for (const thisComponent of ShapeShowScreenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ShapeShowScreenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ShapeShowScreen' ---
    // get current time
    t = ShapeShowScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    
    // *key_resp_6* updates
    if (t >= 0.0 && key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_6.tStart = t;  // (not accounting for frame time here)
      key_resp_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.clearEvents(); });
    }
    
    if (key_resp_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_6.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_6_allKeys = _key_resp_6_allKeys.concat(theseKeys);
      if (_key_resp_6_allKeys.length > 0) {
        key_resp_6.keys = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
        key_resp_6.rt = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].rt;
        key_resp_6.duration = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *ContoursImage* updates
    if (t >= 0.0 && ContoursImage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ContoursImage.tStart = t;  // (not accounting for frame time here)
      ContoursImage.frameNStart = frameN;  // exact frame index
      
      ContoursImage.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ShapeShowScreenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ShapeShowScreenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ShapeShowScreen' ---
    for (const thisComponent of ShapeShowScreenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ShapeShowScreen.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_6.corr, level);
    }
    psychoJS.experiment.addData('key_resp_6.keys', key_resp_6.keys);
    if (typeof key_resp_6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_6.rt', key_resp_6.rt);
        psychoJS.experiment.addData('key_resp_6.duration', key_resp_6.duration);
        routineTimer.reset();
        }
    
    key_resp_6.stop();
    // the Routine "ShapeShowScreen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ShapeshowScreenComponents;
function ShapeshowScreenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ShapeshowScreen' ---
    t = 0;
    ShapeshowScreenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(24.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('ShapeshowScreen.started', globalClock.getTime());
    EasyHardLineExample.setColor(new util.Color([1,1,1]));
    EasyHardLineExample.setPos([0, 0]);
    EasyHardLineExample.setSize([(20 * x_scale), (11 * y_scale)]);
    EasyHardLineExample.setOri(0.0);
    EasyHardLineExample.setImage('resources/EasyHardLine.png');
    EasyHardCurve.setPos([0, 0]);
    EasyHardCurve.setSize([(20 * x_scale), (11 * y_scale)]);
    EasyHardCurve.setOri(0.0);
    EasyHardCurve.setImage('resources/EasyHardCurve.png');
    // keep track of which components have finished
    ShapeshowScreenComponents = [];
    ShapeshowScreenComponents.push(NextTwoImagesText);
    ShapeshowScreenComponents.push(EasyHardLineExample);
    ShapeshowScreenComponents.push(EasyHardCurve);
    
    for (const thisComponent of ShapeshowScreenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function ShapeshowScreenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ShapeshowScreen' ---
    // get current time
    t = ShapeshowScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *NextTwoImagesText* updates
    if (t >= 0 && NextTwoImagesText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      NextTwoImagesText.tStart = t;  // (not accounting for frame time here)
      NextTwoImagesText.frameNStart = frameN;  // exact frame index
      
      NextTwoImagesText.setAutoDraw(true);
    }
    
    frameRemains = 0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (NextTwoImagesText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      NextTwoImagesText.setAutoDraw(false);
    }
    
    
    // *EasyHardLineExample* updates
    if (t >= 8 && EasyHardLineExample.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      EasyHardLineExample.tStart = t;  // (not accounting for frame time here)
      EasyHardLineExample.frameNStart = frameN;  // exact frame index
      
      EasyHardLineExample.setAutoDraw(true);
    }
    
    frameRemains = 8 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (EasyHardLineExample.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      EasyHardLineExample.setAutoDraw(false);
    }
    
    
    // *EasyHardCurve* updates
    if (t >= 16 && EasyHardCurve.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      EasyHardCurve.tStart = t;  // (not accounting for frame time here)
      EasyHardCurve.frameNStart = frameN;  // exact frame index
      
      EasyHardCurve.setAutoDraw(true);
    }
    
    frameRemains = 16 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (EasyHardCurve.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      EasyHardCurve.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ShapeshowScreenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ShapeshowScreenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ShapeshowScreen' ---
    for (const thisComponent of ShapeshowScreenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ShapeshowScreen.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Spacebarpressendtut_allKeys;
var SummaryScreenTutComponents;
function SummaryScreenTutRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'SummaryScreenTut' ---
    t = 0;
    SummaryScreenTutClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('SummaryScreenTut.started', globalClock.getTime());
    Spacebarpressendtut.keys = undefined;
    Spacebarpressendtut.rt = undefined;
    _Spacebarpressendtut_allKeys = [];
    // keep track of which components have finished
    SummaryScreenTutComponents = [];
    SummaryScreenTutComponents.push(essentialsText);
    SummaryScreenTutComponents.push(Spacebarpressendtut);
    
    for (const thisComponent of SummaryScreenTutComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function SummaryScreenTutRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'SummaryScreenTut' ---
    // get current time
    t = SummaryScreenTutClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *essentialsText* updates
    if (t >= 0.0 && essentialsText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      essentialsText.tStart = t;  // (not accounting for frame time here)
      essentialsText.frameNStart = frameN;  // exact frame index
      
      essentialsText.setAutoDraw(true);
    }
    
    
    // *Spacebarpressendtut* updates
    if (t >= 0.0 && Spacebarpressendtut.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Spacebarpressendtut.tStart = t;  // (not accounting for frame time here)
      Spacebarpressendtut.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Spacebarpressendtut.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Spacebarpressendtut.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Spacebarpressendtut.clearEvents(); });
    }
    
    if (Spacebarpressendtut.status === PsychoJS.Status.STARTED) {
      let theseKeys = Spacebarpressendtut.getKeys({keyList: ['space'], waitRelease: false});
      _Spacebarpressendtut_allKeys = _Spacebarpressendtut_allKeys.concat(theseKeys);
      if (_Spacebarpressendtut_allKeys.length > 0) {
        Spacebarpressendtut.keys = _Spacebarpressendtut_allKeys[_Spacebarpressendtut_allKeys.length - 1].name;  // just the last key pressed
        Spacebarpressendtut.rt = _Spacebarpressendtut_allKeys[_Spacebarpressendtut_allKeys.length - 1].rt;
        Spacebarpressendtut.duration = _Spacebarpressendtut_allKeys[_Spacebarpressendtut_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of SummaryScreenTutComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function SummaryScreenTutRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'SummaryScreenTut' ---
    for (const thisComponent of SummaryScreenTutComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('SummaryScreenTut.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Spacebarpressendtut.corr, level);
    }
    psychoJS.experiment.addData('Spacebarpressendtut.keys', Spacebarpressendtut.keys);
    if (typeof Spacebarpressendtut.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Spacebarpressendtut.rt', Spacebarpressendtut.rt);
        psychoJS.experiment.addData('Spacebarpressendtut.duration', Spacebarpressendtut.duration);
        routineTimer.reset();
        }
    
    Spacebarpressendtut.stop();
    // the Routine "SummaryScreenTut" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var BlockLooper;
function BlockLooperLoopBegin(BlockLooperLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    BlockLooper = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Condsfile1.xlsx',
      seed: undefined, name: 'BlockLooper'
    });
    psychoJS.experiment.addLoop(BlockLooper); // add the loop to the experiment
    currentLoop = BlockLooper;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBlockLooper of BlockLooper) {
      snapshot = BlockLooper.getSnapshot();
      BlockLooperLoopScheduler.add(importConditions(snapshot));
      BlockLooperLoopScheduler.add(NewblockscreenRoutineBegin(snapshot));
      BlockLooperLoopScheduler.add(NewblockscreenRoutineEachFrame());
      BlockLooperLoopScheduler.add(NewblockscreenRoutineEnd(snapshot));
      BlockLooperLoopScheduler.add(BlocktitlescreenRoutineBegin(snapshot));
      BlockLooperLoopScheduler.add(BlocktitlescreenRoutineEachFrame());
      BlockLooperLoopScheduler.add(BlocktitlescreenRoutineEnd(snapshot));
      const TrialLoopLoopScheduler = new Scheduler(psychoJS);
      BlockLooperLoopScheduler.add(TrialLoopLoopBegin(TrialLoopLoopScheduler, snapshot));
      BlockLooperLoopScheduler.add(TrialLoopLoopScheduler);
      BlockLooperLoopScheduler.add(TrialLoopLoopEnd);
      BlockLooperLoopScheduler.add(BlockLooperLoopEndIteration(BlockLooperLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var TrialLoop;
function TrialLoopLoopBegin(TrialLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    TrialLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: Condsfile1,
      seed: undefined, name: 'TrialLoop'
    });
    psychoJS.experiment.addLoop(TrialLoop); // add the loop to the experiment
    currentLoop = TrialLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrialLoop of TrialLoop) {
      snapshot = TrialLoop.getSnapshot();
      TrialLoopLoopScheduler.add(importConditions(snapshot));
      TrialLoopLoopScheduler.add(PresentStimScreenRoutineBegin(snapshot));
      TrialLoopLoopScheduler.add(PresentStimScreenRoutineEachFrame());
      TrialLoopLoopScheduler.add(PresentStimScreenRoutineEnd(snapshot));
      TrialLoopLoopScheduler.add(ResponseScreenRoutineBegin(snapshot));
      TrialLoopLoopScheduler.add(ResponseScreenRoutineEachFrame());
      TrialLoopLoopScheduler.add(ResponseScreenRoutineEnd(snapshot));
      TrialLoopLoopScheduler.add(TrialLoopLoopEndIteration(TrialLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function TrialLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(TrialLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function TrialLoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function BlockLooperLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(BlockLooper);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function BlockLooperLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var _key_resp_4_allKeys;
var NewblockscreenComponents;
function NewblockscreenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Newblockscreen' ---
    t = 0;
    NewblockscreenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Newblockscreen.started', globalClock.getTime());
    text_5.setText('Take a small break, before the new block\n\nMake sure you are ready\nMove your cursor away\nFocus your eyes on the center cross\n\nPress space to continue ');
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // keep track of which components have finished
    NewblockscreenComponents = [];
    NewblockscreenComponents.push(text_5);
    NewblockscreenComponents.push(key_resp_4);
    
    for (const thisComponent of NewblockscreenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function NewblockscreenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Newblockscreen' ---
    // get current time
    t = NewblockscreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }
    
    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }
    
    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        key_resp_4.duration = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of NewblockscreenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function NewblockscreenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Newblockscreen' ---
    for (const thisComponent of NewblockscreenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Newblockscreen.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_4.corr, level);
    }
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        psychoJS.experiment.addData('key_resp_4.duration', key_resp_4.duration);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    // the Routine "Newblockscreen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_5_allKeys;
var BlocktitlescreenComponents;
function BlocktitlescreenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Blocktitlescreen' ---
    t = 0;
    BlocktitlescreenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Blocktitlescreen.started', globalClock.getTime());
    Blocktitletext.setText(Blocktitle);
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    // keep track of which components have finished
    BlocktitlescreenComponents = [];
    BlocktitlescreenComponents.push(Blocktitletext);
    BlocktitlescreenComponents.push(key_resp_5);
    
    for (const thisComponent of BlocktitlescreenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function BlocktitlescreenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Blocktitlescreen' ---
    // get current time
    t = BlocktitlescreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Blocktitletext* updates
    if (t >= 0.0 && Blocktitletext.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Blocktitletext.tStart = t;  // (not accounting for frame time here)
      Blocktitletext.frameNStart = frameN;  // exact frame index
      
      Blocktitletext.setAutoDraw(true);
    }
    
    
    // *key_resp_5* updates
    if (t >= 0.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }
    
    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        key_resp_5.duration = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of BlocktitlescreenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function BlocktitlescreenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Blocktitlescreen' ---
    for (const thisComponent of BlocktitlescreenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Blocktitlescreen.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_5.corr, level);
    }
    psychoJS.experiment.addData('key_resp_5.keys', key_resp_5.keys);
    if (typeof key_resp_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_5.rt', key_resp_5.rt);
        psychoJS.experiment.addData('key_resp_5.duration', key_resp_5.duration);
        routineTimer.reset();
        }
    
    key_resp_5.stop();
    // the Routine "Blocktitlescreen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var PresentStimScreenComponents;
function PresentStimScreenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'PresentStimScreen' ---
    t = 0;
    PresentStimScreenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('PresentStimScreen.started', globalClock.getTime());
    stimuli.setSize([(15 * x_scale), (15 * y_scale)]);
    stimuli.setImage(Image);
    StimFixationCross.setSize([(0.3 * x_scale), (0.3 * y_scale)]);
    // keep track of which components have finished
    PresentStimScreenComponents = [];
    PresentStimScreenComponents.push(stimuli);
    PresentStimScreenComponents.push(StimFixationCross);
    
    for (const thisComponent of PresentStimScreenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function PresentStimScreenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'PresentStimScreen' ---
    // get current time
    t = PresentStimScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *stimuli* updates
    if (t >= 0.75 && stimuli.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stimuli.tStart = t;  // (not accounting for frame time here)
      stimuli.frameNStart = frameN;  // exact frame index
      
      stimuli.setAutoDraw(true);
    }
    
    frameRemains = 0.75 + 0.25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stimuli.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stimuli.setAutoDraw(false);
    }
    
    
    // *StimFixationCross* updates
    if (t >= 0.0 && StimFixationCross.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      StimFixationCross.tStart = t;  // (not accounting for frame time here)
      StimFixationCross.frameNStart = frameN;  // exact frame index
      
      StimFixationCross.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (StimFixationCross.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      StimFixationCross.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of PresentStimScreenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PresentStimScreenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'PresentStimScreen' ---
    for (const thisComponent of PresentStimScreenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('PresentStimScreen.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _SubjectKeyboardResponse_allKeys;
var ResponseScreenComponents;
function ResponseScreenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ResponseScreen' ---
    t = 0;
    ResponseScreenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('ResponseScreen.started', globalClock.getTime());
    FixationCrossRespScreen.setPos([0, 0]);
    FixationCrossRespScreen.setSize([(0.3 * x_scale), (0.3 * y_scale)]);
    FixationCrossRespScreen.setOri(0.0);
    SubjectKeyboardResponse.keys = undefined;
    SubjectKeyboardResponse.rt = undefined;
    _SubjectKeyboardResponse_allKeys = [];
    // keep track of which components have finished
    ResponseScreenComponents = [];
    ResponseScreenComponents.push(FixationCrossRespScreen);
    ResponseScreenComponents.push(ResponseText);
    ResponseScreenComponents.push(SubjectKeyboardResponse);
    
    for (const thisComponent of ResponseScreenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ResponseScreenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ResponseScreen' ---
    // get current time
    t = ResponseScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *FixationCrossRespScreen* updates
    if (t >= 0.0 && FixationCrossRespScreen.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      FixationCrossRespScreen.tStart = t;  // (not accounting for frame time here)
      FixationCrossRespScreen.frameNStart = frameN;  // exact frame index
      
      FixationCrossRespScreen.setAutoDraw(true);
    }
    
    
    // *ResponseText* updates
    if (t >= 0.5 && ResponseText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ResponseText.tStart = t;  // (not accounting for frame time here)
      ResponseText.frameNStart = frameN;  // exact frame index
      
      ResponseText.setAutoDraw(true);
    }
    
    
    // *SubjectKeyboardResponse* updates
    if (t >= 0.0 && SubjectKeyboardResponse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SubjectKeyboardResponse.tStart = t;  // (not accounting for frame time here)
      SubjectKeyboardResponse.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { SubjectKeyboardResponse.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { SubjectKeyboardResponse.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { SubjectKeyboardResponse.clearEvents(); });
    }
    
    if (SubjectKeyboardResponse.status === PsychoJS.Status.STARTED) {
      let theseKeys = SubjectKeyboardResponse.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _SubjectKeyboardResponse_allKeys = _SubjectKeyboardResponse_allKeys.concat(theseKeys);
      if (_SubjectKeyboardResponse_allKeys.length > 0) {
        SubjectKeyboardResponse.keys = _SubjectKeyboardResponse_allKeys[_SubjectKeyboardResponse_allKeys.length - 1].name;  // just the last key pressed
        SubjectKeyboardResponse.rt = _SubjectKeyboardResponse_allKeys[_SubjectKeyboardResponse_allKeys.length - 1].rt;
        SubjectKeyboardResponse.duration = _SubjectKeyboardResponse_allKeys[_SubjectKeyboardResponse_allKeys.length - 1].duration;
        // was this correct?
        if (SubjectKeyboardResponse.keys == CorrAns) {
            SubjectKeyboardResponse.corr = 1;
        } else {
            SubjectKeyboardResponse.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ResponseScreenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ResponseScreenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ResponseScreen' ---
    for (const thisComponent of ResponseScreenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ResponseScreen.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (SubjectKeyboardResponse.keys === undefined) {
      if (['None','none',undefined].includes(CorrAns)) {
         SubjectKeyboardResponse.corr = 1;  // correct non-response
      } else {
         SubjectKeyboardResponse.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(SubjectKeyboardResponse.corr, level);
    }
    psychoJS.experiment.addData('SubjectKeyboardResponse.keys', SubjectKeyboardResponse.keys);
    psychoJS.experiment.addData('SubjectKeyboardResponse.corr', SubjectKeyboardResponse.corr);
    if (typeof SubjectKeyboardResponse.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('SubjectKeyboardResponse.rt', SubjectKeyboardResponse.rt);
        psychoJS.experiment.addData('SubjectKeyboardResponse.duration', SubjectKeyboardResponse.duration);
        routineTimer.reset();
        }
    
    SubjectKeyboardResponse.stop();
    // the Routine "ResponseScreen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var GoodbyeScreenAndFeedbackComponents;
function GoodbyeScreenAndFeedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'GoodbyeScreenAndFeedback' ---
    t = 0;
    GoodbyeScreenAndFeedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('GoodbyeScreenAndFeedback.started', globalClock.getTime());
    textbox.setText('Thank you for participating!\nPlease report any issues or comments here.\npress ESC to exit the experiment');
    textbox.refresh();
    // keep track of which components have finished
    GoodbyeScreenAndFeedbackComponents = [];
    GoodbyeScreenAndFeedbackComponents.push(textbox);
    
    for (const thisComponent of GoodbyeScreenAndFeedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function GoodbyeScreenAndFeedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'GoodbyeScreenAndFeedback' ---
    // get current time
    t = GoodbyeScreenAndFeedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textbox* updates
    if (t >= 0.0 && textbox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox.tStart = t;  // (not accounting for frame time here)
      textbox.frameNStart = frameN;  // exact frame index
      
      textbox.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of GoodbyeScreenAndFeedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function GoodbyeScreenAndFeedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'GoodbyeScreenAndFeedback' ---
    for (const thisComponent of GoodbyeScreenAndFeedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('GoodbyeScreenAndFeedback.stopped', globalClock.getTime());
    psychoJS.experiment.addData('textbox.text',textbox.text)
    // the Routine "GoodbyeScreenAndFeedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
