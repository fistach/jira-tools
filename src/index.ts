#!/usr/bin/env node

import program = require('commander');

const VERSION = '0.0.1';
const DESCRIPTION = 'Jira toolbox';

program
    .version(VERSION)
    .description(DESCRIPTION);

program
    .command('encode <text>')
    .action((text: string) => {
        console.log(Buffer.from(text).toString('base64'));
    });

program
    .parse(process.argv);
