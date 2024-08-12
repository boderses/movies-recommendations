import { LOCALES } from '../const';

export default {
  [LOCALES.DANISH]: {
    navigation: {
      home: 'Film anbefaling',
      settings: 'Indstillinger'
    },
    no_selected_movies: 'Ingen valgte film',
    put_the_list_name: 'Indsæt listens navn',
    share_with_friends: 'Del med venner',
    copied: 'Kopieret!',
    select: 'Vælg',
    delete: 'Slet',
    filters: {
      sort_by: 'Sorter efter',
      sort_direction: 'Sorter retning',
      include_adult: 'Inkluder voksen',
      year: 'År',
      release_year: 'Udgivelsesår',
      genre: 'Genre',
      submit: 'Indsend',
      sort: {
        'popularity': 'Popularitet',
        'release_date': 'Udgivelsesdato',
        'revenue': 'Indtægter',
        'primary_release_date': 'Primær udgivelsesdato',
        'original_title': 'Original titel',
        'vote_average': 'Stemmegennemsnit',
        'vote_count': 'Optælling af stemmer'
      },
      sort_direction_options: {
        asc: 'ASC',
        desc: 'DESC'
      }
    }
  }
};