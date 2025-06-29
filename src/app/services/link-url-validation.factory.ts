import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { LinkService } from './link.service';

export function linkUrlValidatorFactory(linkService: LinkService): ValidatorFn {

  return (urlField: AbstractControl): ValidationErrors | null => {
    // To prevent checks during the initialisation phase.
    if (!urlField.dirty && !urlField.touched) {
      return null;
    }

    const url = urlField.value;

    if (!linkService.checkUrlSemantic(url)) {
      return { linkUrlValidator: { message: 'Incorrect Url (should start from http(s)://)' } };
    }

    linkService.checkUrlAccessibility(url).subscribe((result) => {
      return !result ? { linkUrlValidator: { message: 'Url is unavailable' } } : null;
    });

    return null;
  };
}
