maker\_parame76
===============


Presentation
------------

This repo is a maker-repository. It stores the parameters and the STL-files of parts made with *desi76*.
This repo uses the javascript packages [desi76-cli](https://www.npmjs.com/package/desi76-cli) and [desi76-uis](https://www.npmjs.com/package/desi76-uis) of the design-library [desi76](https://charlyoleg2.github.io/parame76/).


Requirements
------------

- [node](https://nodejs.org) > 22.00.0
- [npm](https://docs.npmjs.com/cli) > 11.0.0


### Optional requirements

- [OpenSCAD](https://openscad.org/)

For Ubuntu users, *OpenSCAD* is available on [snapcraft](https://snapcraft.io/openscad) and can be installed with:

```bash
sudo snap install openscad
```

Upgrade
-------

For working with the latest *desi76* version:

```bash
npm outdated
npm update --save
git commit -am 'npm update --save'
```


Dev
---

```bash
git clone https://github.com/charlyoleg2/maker_parame76
cd maker_parame76
npm install
npm run
npm run desi76-uis
npx desi76-uis
npx desi76-cli --help
./make_parts.js
```

Vocabulary
----------

- Design: A parametrizable 3D parts. Desginix is a collection of designs.
- Part or Reference: A particular parametrization of a design.
- Instance: The realization of a reference.


References for the maker\_parame76
----------------------------------

ID | Reference           | Design             | Nb of instances
---|---------------------|--------------------|----------------
1  | catamaran           |  catamaran         | 1

Each reference has its own directory with its json-parametrization, scad-script and stl-file.


