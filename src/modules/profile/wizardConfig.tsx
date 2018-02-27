import React from 'react';
import FamilyInfo from './family';
import FarmInfo from './farm';
import PersonalInfo from './personal';
import WorkerInfo from './worker';

export const WizardItems = [
    <PersonalInfo/>,
    <FamilyInfo/>,
    <FarmInfo/>,
    <WorkerInfo/>,
]

export const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize:30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
   // stepStrokeCurrentColor: '#fe7013',
    stepStrokeWidth: 3,
    // stepStrokeFinishedColor: '#fe7013',
    stepStrokeUnFinishedColor: '#aaaaaa',
    // separatorFinishedColor: '#fe7013',
    separatorUnFinishedColor: '#aaaaaa',
    // stepIndicatorFinishedColor: '#fe7013',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    // stepIndicatorLabelCurrentColor: '#fe7013',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    // currentStepLabelColor: '#fe7013'
}

export const StepLabels = [
    "Personal",
    "Family",
    "Farm",
    "Worker",
    "Done"
];

export { FamilyInfo, FarmInfo, PersonalInfo, WorkerInfo }