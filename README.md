# Typali: Nepali typing tutor
Type+Nepali = typali :D

# why typali (not typesala)
 typesala.com typeshala.com domains where too high ;)


# Demo 
[Demo](https://emp3ror.github.io/typali/).

## sample text
* this string is used from 
* कथा : दोषी चश्मा

# Gross speed
WPM (word per minute)
<br>
Taking a [sample text](https://emp3ror.github.io/typesala/speed/sample-text1.md) seems average letters per word on a paragraph (including space) is 6
<br>
So, our formula for gross speed is : 
<br>
Gross WPM = (All typed Entries/6)/Time


# TODO
* calculate speed
* Ending Message
* Nepali paragraphs Array
* Landing page : (choose easy to hard paragraphs)


## How to use in local

### if NVM
```bash
$ source /usr/share/nvm/init-nvm.sh
$ nvm use v10.18.0
```


### Setup

Install node, npm according to you OS
on ARCH 
```bash
$ sudo pacman -S nodejs
```

### Install bower,gulp: 

```bash
$ npm install -g gulp
$ npm install -g bower
$ npm install
$ bower install
```

and run gulp script like this:

```bash
$ gulp launch-server
```

for production 

```bash
$ gulp prod
```

# /dist 
dist folder is created when
```bash
$ gulp prod
```

### for gh-pages
 rename index.html to 404.html (hack for github redirect)
 ```
    $ git subtree push --prefix dist origin gh-pages
    or force push
    $ git push origin `git subtree split --prefix dist master`:gh-pages --force
 ```


## License

* [Apache Version 2.0](http://www.apache.org/licenses/LICENSE-2.0.html)

## Acknowledgements

My sincere respect to all the open source community, all those people who manages their time to help on finding solution to needy, blog their experiences and write tutorials.

## Contributing

Please fork this repository and contribute back using
[pull requests](https://github.com/emp3ror/typesala/pulls).

Any contributions, large or small, major features, bug fixes, additional
language translations, unit/integration tests are welcomed and appreciated
but will be thoroughly reviewed and discussed.


## Reference for speed calculation
https://www.speedtypingonline.com/typing-equations