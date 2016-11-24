BackstopJS Starter
==================

To get started
--------------

- `npm install -g backstopjs`
- `git clone git@github.com:webtoast/backstopjs-starter.git`

Usage
-----

Instead of using the default JSON config, the [JS config option](https://github.com/garris/BackstopJS#using-a-js-based-config-file) has been setup. This means that when you run the tool with the globally available `backstop` command, you must specify the filepath to the config file with the argument `--configPath=./backstop.js`.

The default scenario created by BackstopJS is available to test; however, in order to meet your needs, you have to add scenarios that are configured to test your own site. Each scenario is stored as a JSON file, and each JSON file is stored in the `scenarios/` directory. All of the scenarios will be loaded at run time. This makes it easier to manage multiple scenarios than keeping everything in the config file.

Once you've added your scenarios, you can run BackstopJS with:

`backstop reference --configPath=./backstop.js`

`backstop test --configPath=./backstop.js`

---

If you've never used [BackstopJS](https://github.com/garris/BackstopJS) before, check it out. It's a great tool, has a lot of capability and has saved me multiple times.

Links to more documentation

- [Running custom CasperJS scripts](https://github.com/garris/BackstopJS#running-custom-casperjs-scripts) in BackstopJS
- [CasperJS Documentation](http://docs.casperjs.org/en/latest/)
