#!/usr/bin/env node
// make_abri.js

import { exec } from "child_process";
import { promisify } from 'util';

const aExec = promisify(exec);

async function execCmd(cmd) {
	console.log(cmd);
	try {
		const { stdout, stderr } = await aExec(cmd);
		console.log('---> stdout:');
		console.log(stdout);
		console.log('---> stderr:');
		console.log(stderr);
		console.log('---> end of log');
	} catch (err) {
		console.log(`err895: Error by executing: ${cmd}`);
		console.log(err);
		console.log(`info895: script stopped!`);
		process.exit(1);
	}
}

const opt1 = '-d=desi76/abri -p=px_abri_A1_v01.json';
const opt2 = 'write scad_3d_openscad';
const refName = 'abri_A1';

//rCmd.push(`npx desi76-cli -d=desi76/${desiName} -p=refs/${dName}/px_${fName}.json -o=refs/${dName} --outFileName=${fName}.scad write scad_3d_openscad`);
//rCmd.push(`openscad -o refs/${dName}/${fName}_oscad.stl refs/${dName}/${fName}.scad`);
console.log('make_abri.js says Hello!');
await execCmd('ls -la');
// pl1
let scadName = `${refName}_pl1_edlop1_x1`;
await execCmd(`npx desi76-cli ${opt1} -m d3Plank1 1 -m d3Plank1West 2 -m d3Plank1East 0 -m d3Plank1SN 0 --outFileName=${scadName}.scad ${opt2}`);
await execCmd(`openscad -o output/${scadName}_oscad.stl output/${scadName}.scad`);
scadName = `${refName}_pl1_lolop1_x1`;
await execCmd(`npx desi76-cli ${opt1} -m d3Plank1 1 -m d3Plank1West 0 -m d3Plank1East 0 -m d3Plank1SN 0 --outFileName=${scadName}.scad ${opt2}`);
await execCmd(`openscad -o output/${scadName}_oscad.stl output/${scadName}.scad`);
scadName = `${refName}_pl1_loedp1_x1`;
await execCmd(`npx desi76-cli ${opt1} -m d3Plank1 1 -m d3Plank1West 0 -m d3Plank1East 2 -m d3Plank1SN 0 --outFileName=${scadName}.scad ${opt2}`);
await execCmd(`openscad -o output/${scadName}_oscad.stl output/${scadName}.scad`);
scadName = `${refName}_pl1_edlop4_x1`;
await execCmd(`npx desi76-cli ${opt1} -m d3Plank1 1 -m d3Plank1West 2 -m d3Plank1East 0 -m d3Plank1SN 3 --outFileName=${scadName}.scad ${opt2}`);
await execCmd(`openscad -o output/${scadName}_oscad.stl output/${scadName}.scad`);
scadName = `${refName}_pl1_lolop4_x1`;
await execCmd(`npx desi76-cli ${opt1} -m d3Plank1 1 -m d3Plank1West 0 -m d3Plank1East 0 -m d3Plank1SN 3 --outFileName=${scadName}.scad ${opt2}`);
await execCmd(`openscad -o output/${scadName}_oscad.stl output/${scadName}.scad`);
scadName = `${refName}_pl1_loedp4_x1`;
await execCmd(`npx desi76-cli ${opt1} -m d3Plank1 1 -m d3Plank1West 0 -m d3Plank1East 2 -m d3Plank1SN 3 --outFileName=${scadName}.scad ${opt2}`);
await execCmd(`openscad -o output/${scadName}_oscad.stl output/${scadName}.scad`);
// pl2
scadName = `${refName}_pl2EE_x4`;
await execCmd(`npx desi76-cli ${opt1} -m d3Plank2EE 1 --outFileName=${scadName}.scad ${opt2}`);
await execCmd(`openscad -o output/${scadName}_oscad.stl output/${scadName}.scad`);
// pl3
scadName = `${refName}_pl3EE_x6`;
await execCmd(`npx desi76-cli ${opt1} -m d3Plank3EE 1 --outFileName=${scadName}.scad ${opt2}`);
await execCmd(`openscad -o output/${scadName}_oscad.stl output/${scadName}.scad`);
// pl4
scadName = `${refName}_pl4S_x3`;
await execCmd(`npx desi76-cli ${opt1} -m d3Plank4S 1 --outFileName=${scadName}.scad ${opt2}`);
await execCmd(`openscad -o output/${scadName}_oscad.stl output/${scadName}.scad`);
scadName = `${refName}_pl4N_x3`;
await execCmd(`npx desi76-cli ${opt1} -m d3Plank4N 1 --outFileName=${scadName}.scad ${opt2}`);
await execCmd(`openscad -o output/${scadName}_oscad.stl output/${scadName}.scad`);
// pl5
scadName = `${refName}_pl5_x3`;
await execCmd(`npx desi76-cli ${opt1} -m d3Plank5 1 --outFileName=${scadName}.scad ${opt2}`);
await execCmd(`openscad -o output/${scadName}_oscad.stl output/${scadName}.scad`);
// pl6
scadName = `${refName}_pl6_x1`;
await execCmd(`npx desi76-cli ${opt1} -m d3Plank6 1 --outFileName=${scadName}.scad ${opt2}`);
await execCmd(`openscad -o output/${scadName}_oscad.stl output/${scadName}.scad`);
// pl7
// pl8
scadName = `${refName}_pl8S_x3`;
await execCmd(`npx desi76-cli ${opt1} -m d3Plank8S 1 --outFileName=${scadName}.scad ${opt2}`);
await execCmd(`openscad -o output/${scadName}_oscad.stl output/${scadName}.scad`);
scadName = `${refName}_pl8N_x3`;
await execCmd(`npx desi76-cli ${opt1} -m d3Plank8N 1 --outFileName=${scadName}.scad ${opt2}`);
await execCmd(`openscad -o output/${scadName}_oscad.stl output/${scadName}.scad`);
// plda
scadName = `${refName}_plda_x6`;
await execCmd(`npx desi76-cli ${opt1} -m d3PlankDiagA 1 --outFileName=${scadName}.scad ${opt2}`);
await execCmd(`openscad -o output/${scadName}_oscad.stl output/${scadName}.scad`);
// pldb
scadName = `${refName}_pldb_x8`;
await execCmd(`npx desi76-cli ${opt1} -m d3PlankDiagB 1 --outFileName=${scadName}.scad ${opt2}`);
await execCmd(`openscad -o output/${scadName}_oscad.stl output/${scadName}.scad`);
// pldt
scadName = `${refName}_pldt_x4`;
await execCmd(`npx desi76-cli ${opt1} -m d3PlankDiagTop 1 --outFileName=${scadName}.scad ${opt2}`);
await execCmd(`openscad -o output/${scadName}_oscad.stl output/${scadName}.scad`);
// finish
await execCmd('ls -la output');
console.log('make_abri.js says Bye!');

