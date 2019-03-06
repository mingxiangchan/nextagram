import { Component, OnInit, Input } from '@angular/core'
import { ImageService } from '../image.service'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  @Input() id: number
  images: string[] = []

  constructor(private imagesService: ImageService) {}

  ngOnInit() {
    this.imagesService.getUserImages(this.id).subscribe(images => {
      this.images = images
    })
  }
}
