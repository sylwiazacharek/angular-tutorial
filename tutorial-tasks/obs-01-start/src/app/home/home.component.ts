import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
	subscription: Subscription;

  constructor() { }

  ngOnInit() {
		// this.subscription = interval(1000).subscribe(count => console.log(count));
		const customIntervalObservable = Observable.create(observer => {
			let count = 0;
			setInterval(() => {
				observer.next(count);

				if (count === 5) {
					observer.complete();
				}

				if (count >= 10) {
					observer.error(new Error('Count is greater than 10'));
				}

				count++;
			}, 1000);
		});

		

		this.subscription = customIntervalObservable
		.pipe(
			filter((data: number) => {
				return data % 2 === 0;
			}),
			map((data: number) => {
				return 'Round: ' + (data + 1);
			}))
		.subscribe(
			data => console.log(data),
			error => console.warn(error.message),
			_ => console.log('completed!'));
	}
	
	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

}
