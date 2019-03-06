import { Component, OnInit, Input } from '@angular/core'
import { ImageService } from '../image.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  @Input() id: number
  images: string[] = []

  constructor(
    private route: ActivatedRoute,
    private imagesService: ImageService
  ) {}

  ngOnInit() {
    const id: string = this.route.snapshot.params.id
    this.imagesService.getUserImages(id).subscribe(images => {
      this.images = images
    })
  }
}
