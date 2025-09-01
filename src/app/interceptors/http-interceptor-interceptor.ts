import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export const httpInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const r = req.clone({
    setHeaders: {
      "X-Api-Key": environment.API_KEY,
    }
  });
  console.log(r.headers);
  return next(req);
};
