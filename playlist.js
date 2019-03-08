var playlist = [
'Ballade No. 1 in G minor, Op. 23.mp3',
'Ballade No. 2 in F major, op. 38.mp3',
'Ballade No. 3 in A-flat major, Op. 47.mp3',
'Ballade No. 4 in F minor , Op. 52.mp3',
'Cello Sonata in G minor, Op. 65 - I. Allegro moderato.mp3',
'Cello Sonata in G minor, Op. 65 - III. Largo.mp3',
'Cello Sonata in G minor, Op. 65 - II. Scherzo.mp3',
'Cello Sonata in G minor, Op. 65 - IV. Finale, allegro.mp3',
'Etude no.10 - Op.10 no.10 Ab-major .mp3',
"Etude no.11 - Op.10 no.11 Eb-major 'Arpeggio'.mp3",
"Etude no.12 - Op.10 no.12 C-minor 'Revolutionary'.mp3",
"Etude no.13 - Op.25 no.1 Ab-major 'Aeolian harp'.mp3",
"Etude no.14 - Op.25 no.2 F-minor 'The bees'.mp3",
"Etude no.15 - Op.25 no.3 F-major 'The horseman'.mp3",
'Etude no.16 - Op.25 no.4 A-minor.mp3',
"Etude no.17 - Op.25 no.5 E-minor 'Wrong note'.mp3",
"Etude no.18 - Op.25 no.6 G#-minor 'Thirds'.mp3",
"Etude no.19 - Op.25 no.7 C#-minor 'Cello'.mp3",
"Etude no.1 - Op.10 no.1 C-major 'Waterfall'.mp3",
"Etude no.20 - Op.25 no.8 Db-major 'Sixths'.mp3",
"Etude no.21 - Op.25 no.9 Gb-major 'Butterfly'.mp3",
"Etude no.22 - Op.25 no.10 B-minor 'Octave'.mp3",
"Etude no.23 - Op.25 no.11 A-minor 'Winter wind'.mp3",
"Etude no.24 - Op.25 no.12 C-minor 'Ocean'.mp3",
"Etude no.2 - Op.10 no.2 A-minor 'Chromatic'.mp3",
"Etude no.3 - Op.10 no.3 E-major 'Tristesse'.mp3",
"Etude no.4 - Op.10 no.4 C#-minor 'Torrent'.mp3",
"Etude no.5 - Op.10 no.5 Gb-major 'Black keys'.mp3",
"Etude no.6 - Op.10 no.6 Eb-minor 'Lament'.mp3",
"Etude no.7 - Op.10 no.7 C-major 'Tocatta'.mp3",
"Etude no.8 - Op.10 no.8 F-major 'Sunshine'.mp3",
'Etude no.9 - Op.10 no.9 F-minor .mp3',
'Fantasia Impromptu - Op. posth. 66 C#-minor .mp3',
'Impromptu no.1 - Op.29 Ab-major .mp3',
'Impromptu no.2 - Op.36 F#-major.mp3',
'Impromptu no.3 - Op.51 Gb-major .mp3',
'Mazurka - B. 134 A minor.mp3',
'Mazurka - B. 140 A minor .mp3',
'Mazurka - B.16:1 G major .mp3',
'Mazurka - B.16:2 Bb major .mp3',
'Mazurka - B. 31 D major.mp3',
'Mazurka - B. 4 (also KK Anh. Ia:1) in D major (possibly spurious).mp3',
'Mazurka - B. 71 (revision of B. 31) D major.mp3',
"Mazurka - B. 73 Bb major 'Wolowska'.mp3",
'Mazurka - B. 82 C major .mp3',
'Mazurka - B. 85 A flat major .mp3',
'Mazurka no.10 - Op.17 no.1 Bb-major .mp3',
'Mazurka no.12 - Op.17 no.3 Ab-major .mp3',
'Mazurka no.13 - Op.17 no.4 A-minor .mp3',
'Mazurka no.15 - Op.24 no.2 C-major .mp3',
'Mazurka no.16 - Op.24 no.3 Ab-major .mp3',
'Mazurka no.17 - Op.24 no.4 Bb-minor .mp3',
'Mazurka no.18 - Op.30 no.1 C-minor.mp3',
'Mazurka no.20 - Op.30 no.3 Db-major .mp3',
'Mazurka no.21 - Op.30 no.4 C#-minor .mp3',
'Mazurka no.26 - Op.41 no.1 C#-minor.mp3',
'Mazurka no.27 - Op.41 no.2 E-minor.mp3',
'Mazurka no.28 - Op.41 no.3 B-major.mp3',
'Mazurka no.29 - Op.41 no.4 Ab-major.mp3',
'Mazurka no.30 - Op.50 no.1 G-major .mp3',
'Mazurka no.31 - Op.50 no.2 Ab-major .mp3',
'Mazurka no.32 - Op.50 no.3 C#-minor .mp3',
'Mazurka no.33 - Op.56 no.1 B-major .mp3',
'Mazurka no.34 - Op.56 no.2 C-major .mp3',
'Mazurka no.35 - Op.56 no.3 C-minor .mp3',
'Mazurka no.36 - Op.59 no.1 A-minor .mp3',
'Mazurka no.37 - Op.59 no.2 Ab-major  .mp3',
'Mazurka no.38 - Op.59 no.3 F#-minor .mp3',
'Mazurka no.39 - Op.63 no.1 B-major  .mp3',
'Mazurka no.41 - Op.63 no.3 C#-minor .mp3',
'Mazurka no.42 - Op.67 no.1 G-major.mp3',
'Mazurka no.44 - Op.67 no.3 C-major .mp3',
'Mazurka no.46 - Op.68 no.1 C-major .mp3',
'Mazurka no.49 - Op.68 no.4 F-minor .mp3',
'Mazurka no.4 - Op.6 no.4 Eb-minor.mp3',
'Mazurka no.5 - Op.7 no.1 Bb-major .mp3',
'Mazurka no.6 - Op.7 no.2 A-minor.mp3',
'Mazurka no.7 - Op.7 no.3 F-minor.mp3',
'Mazurka no.8 - Op.7 no.4 Ab-major  .mp3',
'Mazurka no.9 - Op.7 no.5 C-major .mp3',
'Miscellaneous - B. 117 Andantino (Wiosna:Spring).mp3',
'Miscellaneous no.10 - Op.72 n.3 posth. Ecossaise no.3 Db-major .mp3',
'Miscellaneous no.11 - Op.72 n.2 posth. Funeral March C-minor .mp3',
'Miscellaneous no.12 - B. 151 posth. Albumblatt E-major .mp3',
'Miscellaneous no.13 - B. 17 posth. Contradance Gb-major.mp3',
'Miscellaneous no.14 - Op.posth. Galop Marquis Ab-major .mp3',
'Miscellaneous no.16 - B. 84 posth. Cantabile Bb-major .mp3',
'Miscellaneous no.17 - B. 129a posth. Canon F-minor (Unfinished).mp3',
'Miscellaneous no.18 - B. 144 posth. Fugue A-minor .mp3',
'Miscellaneous no.19 - B. 160b1 posth. Bourree 1 A-major .mp3',
'Miscellaneous no.20 - B. 160b2 posth. Bourree 2 G-major .mp3',
'Miscellaneous no.21 - B. 109 posth. Largo Eb-major .mp3',
'Miscellaneous no.3 - Op.43 Tarantelle Ab-major .mp3',
'Miscellaneous no.4 - Op.46 Allegro de concert A-major .mp3',
'Miscellaneous no.5 - Op.49 Fantaisie in F minor.mp3',
'Miscellaneous no.8 - Op.72 n.3 posth. Ecossaise no.1 D-major .mp3',
'Miscellaneous no.9 - Op.72 n.3 posth. Ecossaise no.2 G-minor.mp3',
'Nocturne no.10 - Op.32 no.2 Ab-major.mp3',
'Nocturne no.11 - Op.37 no.1 G-minor .mp3',
'Nocturne no.13 - Op.48 no.1 C-minor .mp3',
'Nocturne no.14 - Op.48 no.2 F#-minor .mp3',
'Nocturne no.15 - Op.55 no.1 F-minor .mp3',
'Nocturne no.16 - Op.55 no.2 Eb-major .mp3',
'Nocturne no.17 - Op.62 no.1 B-major .mp3',
'Nocturne no.18 - Op.62 no.2 E-major .mp3',
'Nocturne no.19 - Op posth. 72 E-minor.mp3',
'Nocturne no.1 - Op.9 no.1 Bb-minor  .mp3',
"Nocturne no.20 - B. 49 posth C#-minor 'Lento con gran espressione'.mp3",
'Nocturne no.21 - B. 108 posth C-minor .mp3',
'Nocturne no.2 - Op.9 no.2 Eb-major .mp3',
'Nocturne no.3 - Op.9 no.3 B-major  .mp3',
'Nocturne no.4 - Op.15 no.1 F-major .mp3',
'Nocturne no.5 - Op.15 no.2 F#-major .mp3',
'Nocturne no.7 - Op.27 no.1 C#-minor .mp3',
'Nocturne no.8 - Op.27 no.2 Db-major  .mp3',
'Nocturne no.9 - Op.32 no.1 B-major  .mp3',
'Polonaise Andante Spianato e Grande Polonaise Brilliante Op.22 Eb-major .mp3',
'Polonaise no.10 - Op.71 no.2 Bb-major .mp3',
'Polonaise no.11 - Op.71 no.3 F-minor .mp3',
'Polonaise no.12 - B. 3 posth Bb-major  .mp3',
'Polonaise no.13 - B. 1 posth G-minor .mp3',
'Polonaise no.14 - B. 5 posth Ab-major.mp3',
'Polonaise no.15 - B. 6 posth G#-minor  .mp3',
"Polonaise no.16 - B. 13 posth Bb-minor 'Adieu à Guillaume Kolberg'.mp3",
'Polonaise no.17 - B. 36 posth Gb-Major.mp3',
'Polonaise no.2 - Op.26 no.1 C#-minor .mp3',
'Polonaise no.3 - Op.26 no.2 Eb-minor .mp3',
"Polonaise no.4 - Op.40 no.1 A-major 'Military'.mp3",
'Polonaise no.6 - Op.44 F#-minor.mp3',
"Polonaise no.7 - Op.53 Ab-major 'Heroic'.mp3",
'Polonaise no.9 - Op.71 no.1 D-minor  .mp3',
"Variation no.2 - Op.12 Bb-major ''Variationes brillantes''.mp3",
"Variation no.3 - B. 14 posth E-major  ''Variations sur un air national allemand''.mp3",
"Variation no.5 - B. 37 posth A-major ''Sur souvenir de Paganini''.mp3",
"Variation no.6 - B. 9 posth E-major ''on a Theme from Rossini's La Cenerentola.mp3",
'Waltz in A flat major, Op. 34 no. 1.mp3',
'Waltz in A minor, Op. 34 no. 2.mp3',
'Waltz in F major, Op. 34 no. 3.mp3',
'Waltz no.10 - Op.69 no.2 B-minor  .mp3',
'Waltz no.11 - Op.70 no.1 Gb-major .mp3',
'Waltz no.12 - Op.70 no.2 F-minor  .mp3',
'Waltz no.13 - Op.70 no.3 Db-major .mp3',
'Waltz no.14 - B. 56 posth E-minor  .mp3',
'Waltz no.15 - B. 44 posth E-major .mp3',
'Waltz no.16 - B. 21 posth Ab-major  .mp3',
'Waltz no.17 - B. 46 posth Eb-major.mp3',
'Waltz no.18 - B. 133 posth Eb-major .mp3',
'Waltz no.19 - B. 150 posth A-minor .mp3',
"Waltz no.1 - Op.18 Eb-major 'Grande valse brillante'.mp3",
'Waltz no.20 - Op.posth F#-minor .mp3',
'Waltz no.5 - Op.42 Ab-major  .mp3',
"Waltz no.6 - Op.64 no.1 Db-major 'Minute waltz'.mp3",
'Waltz no.7 - Op.64 no.2 C#-minor .mp3',
'Waltz no.8 - Op.64 no.3 Ab-major .mp3',
"Waltz no.9 - Op.69 no.1 Ab-major 'L'adieu'.mp3",
];
