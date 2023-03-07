import {Subject} from 'rxjs';

export const subjectLoading = new Subject<boolean>();
export const subjectLoadingAsObservable = subjectLoading.asObservable();
