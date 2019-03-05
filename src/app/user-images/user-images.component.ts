import { Component, OnInit, Input } from '@angular/core'
import { ImageService } from '../image.service'
import { User } from '../user'

@Component({
  selector: 'app-user-images',
  templateUrl: './user-images.component.html',
  styleUrls: ['./user-images.component.scss'],
})
export class UserImagesComponent implements OnInit {
  @Input() user: User
  images: string[] = []

  constructor(private imagesService: ImageService) {}

  ngOnInit() {
    this.imagesService.getUserImages(this.user.id).subscribe(images => {
      this.images = images
    })
  }
}
