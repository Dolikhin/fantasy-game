
import Settings from './Settings.js';

test('Default settings should be returned when no user settings are set', () => {
  const settings = new Settings();
  const expected = new Map([
    ['theme', 'dark'],
    ['music', 'trance'],
    ['difficulty', 'easy']
  ]);

  expect(settings.settings).toEqual(expected);
});

test('User settings should override default settings', () => {
  const settings = new Settings();
  settings.setSetting('theme', 'light');
  settings.setSetting('music', 'rock');
  const expected = new Map([
    ['theme', 'light'],
    ['music', 'rock'],
    ['difficulty', 'easy']
  ]);

  expect(settings.settings).toEqual(expected);
});

test('Invalid setting key should throw an error', () => {
  const settings = new Settings();
  expect(() => settings.setSetting('invalidKey', 'value')).toThrow('Invalid setting key');
});

test('User settings should only include overridden settings', () => {
  const settings = new Settings();
  settings.setSetting('theme', 'gray');
  settings.setSetting('difficulty', 'nightmare');
  const expectedUserSettings = new Map([
    ['theme', 'gray'],
    ['difficulty', 'nightmare']
  ]);

  expect(settings.userSettings).toEqual(expectedUserSettings);
});
