import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  tooltip:any;
  projects = [
    {
      title: 'Telefon Məlumat Kitabçası',
      description:
        'Lorem ipsum dolor sit amet co vitae diam enim. Sed cursus ut quis sagittis non sed. Risus a dapibus elit purus molestie.Lorem Lorem ipsum dolor sit amet consectetur. Pretium integer velit volutpatLorem ipsum dolor sit amet consectetur.',
      icon: 'fa-solid fa-phone',
      date: '3 September 2019',
      url: 'https://epb.fhn.gov.az/',
      status: 'yeni'
    },
    {
      title: 'Tapşırıqların idarə olunması',
      description:
        'Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Pretium integer velit volutpatLorem ipsum dolor sit amet consectetur. Pretium integer velit volutpat Pretium integer velit volutpat vestibulum aliquam tortor condimentum. Non ut nulla magna vitae diam enim. Sed cursus ut quis sagittis non sed. Risus a dapibus elit purus molestie.',
      icon: 'fa-solid fa-list-check',
      date: '3 September 2019',
      url: 'https://tms01.fhn.gov.az/',
    },
    {
      title: 'FHN Xəbərlər',
      description:
        'Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur. Pretium integer velit volutpatLorem ipsum dolor sit amet consectetur. Pretium integer velit volutpat. ',
      icon: 'fa-solid fa-newspaper',
      date: '3 September 2019',
      url: 'https://fhnews.fhn.gov.az/',
    },
    {
      title: 'Elektron xidmətlər',
      description:
        'Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Pretium integer velit volutpatLorem ipsum dolor sit amet consectetur. Pretium integer velit volutpat Pretium integer velit volutpat vestibulum aliquam tortor condimentum. Non ut nulla magna vitae diam enim. Sed cursus ut quis sagittis non sed. Risus a dapibus elit purus molestie.',
      icon: 'fa-brands fa-edge-legacy',
      date: '3 September 2019',
      url: '',
    },
    {
      title: 'Elektron Kitabxana',
      description:
        'Lndimentum. Non ut nulla magna vitae diam enim. Sed cursus ut quis sagittis non sed. Risus a dapibus elit purus molestie.',
      icon: 'fa-solid fa-book',
      date: '3 September 2019',
      url: 'https://epb.fhn.gov.az/',
    },
    {
      title: 'Elektron imtahan',
      description:
        'Lorem ipsum dolor sit amet consectetur. Pretium integer velit volutpat vestibulum aliquam tortor condimentum. Non ut nulla magna vitae diam enim. Sed cursus ut quis sagittis non sed. Risus a dapibus elit purus molestie.',
      icon: 'fa-solid fa-pen-to-square',
      date: '3 September 2019',
      url: 'https://epb.fhn.gov.az/',
    },
    {
      title: 'COP29',
      description:
        'Lorem ietium integer velit volutpat vestibulum aliquam tortor covitae diam enim. Sed cursus ut quis sagittis non sed. Risus a dapibus elit purus molestie.',
      icon: 'fa-solid fa-earth-americas',
      date: '3 September 2019',
      url: 'https://cop29.fhn.gov.az/',
    },
    {
      title: 'Büdcə planlama',
      description:
        'Lorem ipsum dolor sit amet consectetur. Pretium integer velit volutpat vestibulum aliquam tortor condimentum. Non ut nulla magna vitae diam enim. Sed cursus ut quis sagittis non sed. Risus a dapibus elit purus molestie.',
      icon: 'fa-solid fa-sack-dollar',
      date: '3 September 2019',
      url: 'https://epb.fhn.gov.az/',
    },
    {
      title: 'Müqavilələrin qeydiyyatı',
      description:
        'Lorem ipsum dolor sit amet consectetur. Pretium integer velit volutpat vestibulum aliquam tortor condimentum. Non ut nulla magna vitae diam enim.',
      icon: 'fa-solid fa-handshake',
      date: '3 September 2019',
      url: 'https://epb.fhn.gov.az/',
    },
    {
      title: 'QR kod generasiya sistemi',
      description:
        'Lorem ipsum dolor sit amet consectetur. Pretium integer velit volutpat vestibulum aliquam tortor condimentum. Non ut nulla magna vitae diam enim. Sed cursus ut quis sagittis non sed. Risus a dapibus elit purus molestie.',
      icon: 'fa-solid fa-qrcode',
      date: '3 September 2019',
      url: 'https://file01.fhn.gov.az/',
    },
    {
      title: 'SİM',
      description:
        'Lorem ipsum dolor sit amet consectetur. Pretium integer velit volutpat vestibulum aliquam tortor condimentum. Non ut nulla magna vitae diam enim. Sed cursus ut quis sagittis non sed. Risus a dapibus elit purus molestie.',
      icon: 'fa-solid fa-water',
      date: '3 September 2019',
      url: 'https://epb.fhn.gov.az/',
    },
    {
      title: 'K3',
      description:
        'Lorem ipsum dolor sitit amet consectetur. Pretium integer velit volutpat vestibulum aliquam tortor condimentum. Non ut nulla magna vitae diam enim. Sed cursus ut quis sagittis non sed. Risus a dapibus elit purus molestieit amet consectetur. Pretium integer velit volutpat vestibulum aliquam tortor condimentum. Non ut nulla magna vitae diam enim. Sed cursus ut quis sagittis non sed. Risus a dapibus elit purus molestieit amet consectetur. Pretium integer velit volutpat vestibulum aliquam tortor condimentum. Non ut nulla magna vitae diam enim. Sed cursus ut quis sagittis non sed. Risus a dapibus elit purus molestieimentum. Non ut nulla magna vitae diam enim. Sed cursus ut quis sagittis non sed. Risus a dapibus elit purus molestie.',
      icon: 'fa-solid fa-users',
      date: '3 September 2019',
      url: 'https://epb.fhn.gov.az/',
    },
    // {
    //   title: 'Telefon Məlumat Kitabçası',
    //   description:'Lorem ipsum dolor sit amet consectetur. Pretium integer velit volutpat vestibulum aliquam tortor condimentum. Non ut nulla magna vitae diam enim. Sed cursus ut quis sagittis non sed. Risus a dapibus elit purus molestie.',
    //   icon:'',
    //   date:'3 September 2019',
    //   url:'https://epb.fhn.gov.az/'
    // },
  ];
  first: number = 0;

  rows: number = 10;

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }
}
