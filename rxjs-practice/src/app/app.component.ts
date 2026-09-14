import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { ObservableOfComponent } from './observable-of/observable-of.component';
import { ObservalbleFromComponent } from './observalble-from/observalble-from.component';
import { FromEventComponent } from './from-event/from-event.component';
import { IntervalComponent } from './interval/interval.component';
import { TimerComponent } from './timer/timer.component';
import { RangeComponent } from './range/range.component';
import { MapComponent } from './map/map.component';
import { FilterComponent } from './filter/filter.component';
import { TapComponent } from './tap/tap.component';
import { RxjsDemoComponent } from './rxjs-demo/rxjs-demo.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { ExhaustMapComponent } from './exhaust-map/exhaust-map.component';
import { SubjectComponent } from './subject/subject.component';
import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ObservableDemoComponent,
    ObservableOfComponent,
    ObservalbleFromComponent,
    FromEventComponent,
    IntervalComponent,
    TimerComponent,
    RangeComponent,
    MapComponent,
    FilterComponent,
    TapComponent,
    RxjsDemoComponent,
    SwitchMapComponent,
    MergeMapComponent,
    ConcatMapComponent,
    ExhaustMapComponent,
    SubjectComponent,
    BehaviorSubjectComponent,
    ReplaySubjectComponent,
    AsyncSubjectComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'rxjs-practice';
}
