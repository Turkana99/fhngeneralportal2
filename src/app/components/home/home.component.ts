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
      icon: '../../../assets/images/phoneIcon.svg',
      date: '3 September 2019',
      url: 'https://epb.fhn.gov.az/',
      status: 'yeni'
    },
    {
      title: 'Tapşırıqların idarə olunması',
      description:
        'Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Pretium integer velit volutpatLorem ipsum dolor sit amet consectetur. Pretium integer velit volutpat Pretium integer velit volutpat vestibulum aliquam tortor condimentum. Non ut nulla magna vitae diam enim. Sed cursus ut quis sagittis non sed. Risus a dapibus elit purus molestie.',
      icon: '../../../assets/images/Task.svg',
      date: '3 September 2019',
      url: 'https://tms01.fhn.gov.az/',
    },
    {
      title: 'FHN Xəbərlər',
      description:
        'Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur. Pretium integer velit volutpatLorem ipsum dolor sit amet consectetur. Pretium integer velit volutpat. ',
      icon: '../../../assets/images/news.svg',
      date: '3 September 2019',
      url: 'https://fhnews.fhn.gov.az/',
    },
    {
      title: 'Elektron xidmətlər',
      description:
        'Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Pretium integer velit volutpatLorem ipsum dolor sit amet consectetur. Pretium integer velit volutpat Pretium integer velit volutpat vestibulum aliquam tortor condimentum. Non ut nulla magna vitae diam enim. Sed cursus ut quis sagittis non sed. Risus a dapibus elit purus molestie.',
      icon: '../../../assets/images/e.svg',
      date: '3 September 2019',
      url: '',
    },
    {
      title: 'Elektron Kitabxana',
      description:
        'Lndimentum. Non ut nulla magna vitae diam enim. Sed cursus ut quis sagittis non sed. Risus a dapibus elit purus molestie.',
      icon: '../../../assets/images/books.svg',
      date: '3 September 2019',
      url: 'https://epb.fhn.gov.az/',
    },
    {
      title: 'Elektron imtahan',
      description:
        'Lorem ipsum dolor sit amet consectetur. Pretium integer velit volutpat vestibulum aliquam tortor condimentum. Non ut nulla magna vitae diam enim. Sed cursus ut quis sagittis non sed. Risus a dapibus elit purus molestie.',
      icon: '../../../assets/images/exam.svg',
      date: '3 September 2019',
      url: 'https://epb.fhn.gov.az/',
    },
    {
      title: 'COP29',
      description:
        'Lorem ietium integer velit volutpat vestibulum aliquam tortor covitae diam enim. Sed cursus ut quis sagittis non sed. Risus a dapibus elit purus molestie.',
      icon: '../../../assets/images/world.svg',
      date: '3 September 2019',
      url: 'https://cop29.fhn.gov.az/',
    },
    {
      title: 'Büdcə planlama',
      description:
        'Lorem ipsum dolor sit amet consectetur. Pretium integer velit volutpat vestibulum aliquam tortor condimentum. Non ut nulla magna vitae diam enim. Sed cursus ut quis sagittis non sed. Risus a dapibus elit purus molestie.',
      icon: '../../../assets/images/wallet.svg',
      date: '3 September 2019',
      url: 'https://epb.fhn.gov.az/',
    },
    {
      title: 'Müqavilələrin qeydiyyatı',
      description:
        'Lorem ipsum dolor sit amet consectetur. Pretium integer velit volutpat vestibulum aliquam tortor condimentum. Non ut nulla magna vitae diam enim.',
      icon: '../../../assets/images/contract.svg',
      date: '3 September 2019',
      url: 'https://epb.fhn.gov.az/',
    },
    {
      title: 'QR kod generasiya sistemi',
      description:
        'Lorem ipsum dolor sit amet consectetur. Pretium integer velit volutpat vestibulum aliquam tortor condimentum. Non ut nulla magna vitae diam enim. Sed cursus ut quis sagittis non sed. Risus a dapibus elit purus molestie.',
      icon: '../../../assets/images/qr.svg',
      date: '3 September 2019',
      url: 'https://file01.fhn.gov.az/',
    },
    {
      title: 'SİM',
      description:
        'Lorem ipsum dolor sit amet consectetur. Pretium integer velit volutpat vestibulum aliquam tortor condimentum. Non ut nulla magna vitae diam enim. Sed cursus ut quis sagittis non sed. Risus a dapibus elit purus molestie.',
      icon: '../../../assets/images/water.svg',
      date: '3 September 2019',
      url: 'https://epb.fhn.gov.az/',
    },
    {
      title: 'K3',
      description:
        'Lorem ipsum dolor sitit amet consectetur. Pretium integer velit volutpat vestibulum aliquam tortor condimentum. Non ut nulla magna vitae diam enim. Sed cursus ut quis sagittis non sed. Risus a dapibus elit purus molestieit amet consectetur. Pretium integer velit volutpat vestibulum aliquam tortor condimentum. Non ut nulla magna vitae diam enim. Sed cursus ut quis sagittis non sed. Risus a dapibus elit purus molestieit amet consectetur. Pretium integer velit volutpat vestibulum aliquam tortor condimentum. Non ut nulla magna vitae diam enim. Sed cursus ut quis sagittis non sed. Risus a dapibus elit purus molestieimentum. Non ut nulla magna vitae diam enim. Sed cursus ut quis sagittis non sed. Risus a dapibus elit purus molestie.',
      icon: '../../../assets/images/persons.svg',
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
