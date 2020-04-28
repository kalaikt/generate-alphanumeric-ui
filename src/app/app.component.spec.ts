import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { labels } from '../labels';
import { GenerateAlphanumericService } from './services/generate-alphanumeric.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, AppRoutingModule, FormsModule],
      declarations: [AppComponent],
      providers: [GenerateAlphanumericService],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title ${labels.title}`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.labels.title).toEqual(labels.title);
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.container h1').textContent).toContain(
      labels.title
    );
  });
});
