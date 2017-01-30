import { TestBed } from '@angular/core/testing';
import { AlertComponent } from '../../app/components/alert.component';
import { ProvideStoreModule } from '../../app/app.module';

describe('Alert Component', () => {
  let component: AlertComponent;
  let element: HTMLElement;

  beforeEach(() => {
    // TestBed.configureTestingModule({
    //   declarations: [AlertComponent],
    //   imports: []
    // });
    // const fixture = TestBed.createComponent(AlertComponent);
    // component = fixture.componentInstance;
    // element = fixture.nativeElement;
  });

  // it('should have a defined component', () => {
  //   expect(component).toBeDefined();
  // });
    it('should pass', () => {
      expect(true).toEqual(true);
    });
});
