import { Component, OnInit, ViewChild, ElementRef, Input, Renderer2 } from '@angular/core';
import { AnimationBuilder, AnimationPlayer, AnimationFactory, animate, style } from '@angular/animations';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {

  showPass: boolean = false;
  showPass_: boolean = false;

  

  @ViewChild('slider')
  private _slider: ElementRef;

  public get slider(): HTMLElement {
    return this._slider.nativeElement;
  }

  private currentIdx: number;
  private slides: NodeListOf<HTMLElement>;
  private slideWidth: number;
  private player: AnimationPlayer;
  private time: string = '500ms cubic-bezier(0.075, 0.82, 0.165, 1)'

  // indicator

  @ViewChild('indicator')
  private _indicator: ElementRef;

  public get indicator(): HTMLElement {
    return this._indicator.nativeElement;
  }

  private indicators: NodeListOf<HTMLElement>;
  private indicaterIdx: number;

  lastSlide: boolean;


  constructor(private builder: AnimationBuilder, private render: Renderer2) { }

  ngOnInit() {
    console.log(this.slider)
    this.buildSlides();
  }

  buildSlides() {
    this.currentIdx = 0;
    this.slides = this.slider.querySelectorAll('.slide');
    
    this.slideWidth = this.slides[0].getBoundingClientRect().width;

    for(let i=0; i <= this.slides.length - 1; i++) {
      let span = document.createElement('span');
      span.setAttribute('_ngcontent-c1', '')
      this.indicator.appendChild(span);
      console.log(span);
    }

    this.indicators = this.indicator.querySelectorAll('span');
    this.indicators[this.currentIdx].classList.add('active');
    this.handleIndicater();

    this.lastSlide = this.currentIdx == this.slides.length
    
    // this.slides[this.currentIdx].classList.contains('active') ? 
    //       this.slides[this.currentIdx].classList.remove('active') :
    //       this.slides[this.currentIdx].classList.add('active');
  }

  next() {
    if(this.currentIdx + 1 === this.slides.length) return;

    let lastIdx = this.currentIdx;
    this.indicators[lastIdx].classList.remove('active');

    this.currentIdx = (this.currentIdx + 1) % this.slides.length
    console.log(this.currentIdx);
    const offset = this.currentIdx * this.slideWidth;

    this.indicators[this.currentIdx].classList.add('active');
    const translation : AnimationFactory = this.builder.build([
      animate(this.time, style({ transform: `translateX(-${offset}px)` }))
    ]);
    // console.log(translation);
    this.player = translation.create(this.slider);
    this.player.play();
  }

  prev() {
    if(this.currentIdx === 0) return;
    let lastIdx = this.currentIdx
    this.indicators[lastIdx].classList.remove('active');

    this.currentIdx = ((this.currentIdx - 1) + this.slides.length) % this.slides.length;

    const offset = this.currentIdx * this.slideWidth;
    console.log(offset);

    this.indicators[this.currentIdx].classList.add('active');
    const translation : AnimationFactory = this.builder.build([
      animate(this.time, style({ transform: `translateX(-${offset}px)` }))
    ]);
    
    this.player = translation.create(this.slider);
    this.player.play();
  }

  handleIndicater() {
    this.indicaterIdx = this.currentIdx

    this.indicators.forEach((span, i) => {
      span.addEventListener('click', (e) => {
        this.indicators[this.currentIdx].classList.remove('active');
        const offset = i * this.slideWidth;
        this.indicators[i].classList.add('active');
        this.currentIdx = i;
        const translation : AnimationFactory = this.builder.build([
          animate(this.time, style({ transform: `translateX(-${offset}px)` }))
        ]);
        
        this.player = translation.create(this.slider);
        this.player.play();
      })
    })
    

  }

}
