import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { MediumRedComponent } from './medium-red.component'

describe('MediumRedComponent', () => {
  let component: MediumRedComponent
  let fixture: ComponentFixture<MediumRedComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MediumRedComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumRedComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
