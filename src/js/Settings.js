class Settings {
  constructor() {
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy']
    ]);
    this.userSettings = new Map();
  }

  setSetting(key, value) {
    if (this.defaultSettings.has(key)) {
      this.userSettings.set(key, value);
    } else {
      throw new Error('Invalid setting key');
    }
  }

  get settings() {
    const finalSettings = new Map(this.defaultSettings);
    for (const [key, value] of this.userSettings) {
      finalSettings.set(key, value);
    }
    return finalSettings;
  }
}

export default Settings;
