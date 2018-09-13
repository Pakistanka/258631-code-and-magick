'use strict';
var setupSimilarList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('div');
var generateRandomNumber = function (max, min) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
};

var defaultFirstName = ['Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'];
var defaultLastName = ['да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'];
var defaultCoatColor = ['rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'];
var defaultEyesColor = ['black',
  'red',
  'blue',
  'yellow',
  'green'];


var generateCharactersArray = function (defaultFirstNameArr, defaultLastNameArr, defaultCoatColorArr, defaultEyesColorArr) {
  var charactersArray = [];
  for (var i = 1; i <= 4; i++) {
    var character = {};
    var firstName = defaultFirstNameArr[generateRandomNumber(defaultFirstNameArr.length - 1, 0)];
    var lastName = defaultLastNameArr[generateRandomNumber(defaultLastNameArr.length - 1, 0)];
    var coatColor = defaultCoatColorArr[generateRandomNumber(defaultCoatColorArr.length - 1, 0)];
    var eyesColor = defaultEyesColorArr[generateRandomNumber(defaultEyesColorArr.length - 1, 0)];
    character['name'] = firstName + ' ' + lastName;
    character['coatColor'] = coatColor;
    character['eyesColor'] = eyesColor;
    charactersArray.push(character);
  }
  return charactersArray;
};

var generateSimilarWizardDOM = function (character) {
  var similarWizard = similarWizardTemplate.cloneNode(true);
  similarWizard.querySelector('.setup-similar-label').textContent = character['name'];
  similarWizard.querySelector('.wizard-coat').setAttribute('fill', character['coatColor']);
  similarWizard.querySelector('.wizard-eyes').setAttribute('fill', character['eyesColor']);
  return similarWizard;
};

var addSimilarWizardTemplate = function (charactersArray) {
  var similarWizardTemplateElements = document.createDocumentFragment();
  for (var i = 0; i < charactersArray.length; i++) {
    var similarWizard = generateSimilarWizardDOM(charactersArray[i], similarWizardTemplate);
    similarWizardTemplateElements.appendChild(similarWizard);
  }
  setupSimilarList.appendChild(similarWizardTemplateElements);
};

var charactersArray = generateCharactersArray(defaultFirstName, defaultLastName, defaultCoatColor, defaultEyesColor);
addSimilarWizardTemplate(charactersArray);
var setup = document.querySelector('.setup');
setup.classList.remove('hidden');
var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');



