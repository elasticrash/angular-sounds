import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundService {

  public notes = [
    {
      name: 'C',
      altname: null,
      position: 4,
      frequency: 261.63,
      wavelength: 131.87
    }, {
      name: 'C#',
      altname: 'Db',
      position: 4,
      frequency: 277.18,
      wavelength: 124.47
    }, {
      name: 'D',
      altname: null,
      position: 4,
      frequency: 293.66,
      wavelength: 117.48
    }, {
      name: 'D#',
      altname: 'Eb',
      position: 4,
      frequency: 311.13,
      wavelength: 110.89
    }, {
      name: 'E',
      altname: null,
      position: 4,
      frequency: 329.63,
      wavelength: 104.66
    }, {
      name: 'F',
      altname: null,
      position: 4,
      frequency: 349.23,
      wavelength: 98.79
    }, {
      name: 'F#',
      altname: 'Gb',
      position: 4,
      frequency: 369.99,
      wavelength: 93.24
    }, {
      name: 'G',
      altname: null,
      position: 4,
      frequency: 392.00,
      wavelength: 88.01
    }, {
      name: 'G#',
      altname: 'Ab',
      position: 4,
      frequency: 415.30,
      wavelength: 83.07
    }, {
      name: 'A',
      altname: null,
      position: 4,
      frequency: 440.00,
      wavelength: 78.41
    }, {
      name: 'A#',
      altname: 'Bb',
      position: 4,
      frequency: 466.16,
      wavelength: 74.01
    }, {
      name: 'B',
      altname: null,
      position: 4,
      frequency: 493.88,
      wavelength: 69.85
    }, {
      name: 'C',
      altname: null,
      position: 5,
      frequency: 523.25,
      wavelength: 65.93
    }, {
      name: 'C#',
      altname: 'Db',
      position: 5,
      frequency: 554.37,
      wavelength: 62.23
    }, {
      name: 'D',
      altname: null,
      position: 5,
      frequency: 587.33,
      wavelength: 58.74
    }, {
      name: 'D#',
      altname: 'Eb',
      position: 5,
      frequency: 622.25,
      wavelength: 55.44
    }, {
      name: 'E',
      altname: null,
      position: 5,
      frequency: 659.25,
      wavelength: 52.33
    }, {
      name: 'F',
      altname: null,
      position: 5,
      frequency: 698.46,
      wavelength: 49.39
    }, {
      name: 'F#',
      altname: 'Gb',
      position: 5,
      frequency: 739.99,
      wavelength: 46.62
    }, {
      name: 'G',
      altname: null,
      position: 5,
      frequency: 783.99,
      wavelength: 44.01
    }, {
      name: 'G#',
      altname: 'Ab',
      position: 5,
      frequency: 830.61,
      wavelength: 41.54
    }, {
      name: 'A',
      altname: null,
      position: 5,
      frequency: 880.00,
      wavelength: 39.20
    }, {
      name: 'A#',
      altname: 'Bb',
      position: 5,
      frequency: 932.33,
      wavelength: 37.00
    }, {
      name: 'B',
      altname: null,
      position: 5,
      frequency: 987.77,
      wavelength: 34.93
    }
  ];

  private audioCtx = new (window['AudioContext'] || window['webkitAudioContext'])();
  private gainNode = this.audioCtx.createGain();

  constructor() { }

  public play(freq, time, delay) {
    const oscillator = this.audioCtx.createOscillator();
    oscillator.connect(this.gainNode);
    this.gainNode.connect(this.audioCtx.destination);
    oscillator.type = 'sine'; // sine wave — other values are 'square', 'sawtooth', 'triangle' and 'custom'
    oscillator.frequency.value = freq; // value in hertz
    oscillator.start(this.audioCtx.currentTime + delay);
    oscillator.stop(this.audioCtx.currentTime + delay + time);
  }
}
