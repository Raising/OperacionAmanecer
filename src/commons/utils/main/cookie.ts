export default {
  get: function(propName: string) {
    var name = propName + '=',
      ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1);
      if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return '';
  },

  set: function(propName: string, propValue: string, exdate: string) {
    var d = new Date(parseInt(exdate) || 0),
      expires = 'expires=',
      domain = 'domain=',
      path = 'path=/';
    expires = expires.concat(d.toUTCString());
    domain = domain.concat(this.extractDomain(document.location.hostname));

    document.cookie = propName.concat(
      '=',
      encodeURIComponent(propValue),
      exdate ? '; ' : '',
      exdate ? expires : '',
      '; ',
      domain,
      '; ',
      path,
    );
  },
  extractDomain: function(url: string) {
    var domain, subdomain;
    if (url.indexOf('://') > -1) {
      domain = url.split('/')[2];
    } else {
      domain = url.split('/')[0];
    }
    domain = domain.split(':')[0];

    subdomain = domain.split('.');
    if (subdomain.length > 2) {
      domain = subdomain[subdomain.length - 2].concat('.', subdomain[subdomain.length - 1]);
    }

    return domain;
  },

  //   updateExpiration: function(exSessionDate: string, exLongDate: string, sessionCookies: any) {
  //     var cookies = document.cookie.split('; ');
  //     cookies = _.without(cookies, 'i18next=es');
  //     _.each(cookies, (cookie: string) => {
  //       var item = cookie.split('=');
  //       var exdate = sessionCookies && sessionCookies.indexOf(item[0]) != -1 ? exSessionDate : exLongDate;
  //       this.set(item[0], item[1], exdate);
  //     });
  //   },
};
