import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, ChangeDetectorRef } from '@angular/core';
import { IFabricProps } from 'office-ui-fabric-react/lib/Fabric';

@Component({
  selector: 'fab-fabric',
  exportAs: 'fabFabric',
  template: `
    <Fabric
      #reactNode
      [componentRef]="componentRef"
      [theme]="theme">
      <ReactContent><ng-content></ng-content></ReactContent>
    </Fabric>
  `,
  styles: ['react-renderer'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FabFabricComponent extends ReactWrapperComponent<IFabricProps> {
  @ViewChild('reactNode') protected reactNodeRef: ElementRef;

  @Input() componentRef?: IFabricProps['componentRef'];
  @Input() theme?: IFabricProps['theme'];

  constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef) {
    super(elementRef, changeDetectorRef);
  }
}
