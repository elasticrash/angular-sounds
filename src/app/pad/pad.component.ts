import { Component, OnInit } from '@angular/core';
import { SoundService } from '../services/sound.service';

@Component({
  selector: 'app-pad',
  templateUrl: './pad.component.html',
  styleUrls: ['./pad.component.css']
})
export class PadComponent implements OnInit {
  public blocks: { color, state, note }[] = [];
  private blockSize = 13; // sequencer will use 13 notes
  private noteLength = 1; // duration of the note (1 second)

  constructor(private soundService: SoundService) { }

  ngOnInit() {
    // add default values to the blocks array
    for (let index = 0; index < this.blockSize; index++) {
      this.blocks.push({
        color: 'limegreen',
        state: true,
        note: this.soundService.notes[index]
      });
    }
  }

  /**
   * change the color of the div, and switch its state (on/off)
   * @param index
   */
  public changeState(index: number) {
    this.blocks[index] = (this.blocks[index].color === 'limegreen') ? {
      color: 'tomato',
      state: false,
      note: this.blocks[index].note
    } : {
        color: 'limegreen',
        state: true,
        note: this.blocks[index].note
      };
  }

  /**
   * play the notes that have a true state
   */
  public play() {
    this.blocks.forEach((element, index) => {
      if (element.state) {
        const note = this.soundService.notes[index];
        this.soundService.play(note.frequency,
          this.noteLength, index * this.noteLength);
      }

      // this is to emulate the progress
      setTimeout(() => {
        element.color = 'lightpink';
        if (index + 1 === this.blocks.length) {
          setTimeout(() => {
            this.resetColor();
          }, this.noteLength * 1000);
        }
      }, this.noteLength * 1000 * index);
    });
  }

  /**
   * when sequence ends this returns the colors but to limegreen
   */
  private resetColor() {
    this.blocks.forEach(element => {
      element.color = 'limegreen';
      element.state = true;
    });
  }
}
