import { Component } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
  audio = new Audio();
  isPlaying = false;
  songIndex = 0;

  songs = [
    { title: 'Song 1', url: 'assets/music/song1.mp3' },
    { title: 'Song 2', url: 'assets/music/song2.mp3' }
  ];

  constructor() {
    this.audio.src = this.songs[this.songIndex].url;
  }

  playPause() {
    if (this.isPlaying) {
      this.audio.pause();
    } else {
      this.audio.play();
    }
    this.isPlaying = !this.isPlaying;
  }

  next() {
    this.songIndex = (this.songIndex + 1) % this.songs.length;
    this.audio.src = this.songs[this.songIndex].url;
    this.audio.play();
    this.isPlaying = true;
  }

  prev() {
    this.songIndex = (this.songIndex - 1 + this.songs.length) % this.songs.length;
    this.audio.src = this.songs[this.songIndex].url;
    this.audio.play();
    this.isPlaying = true;
  }
}
