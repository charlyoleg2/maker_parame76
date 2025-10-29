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

//rCmd.push(`npx desi76-cli -d=desi76/${desiName} -p=refs/${dName}/px_${fName}.json -o=refs/${dName} --outFileName=${fName}.scad write scad_3d_openscad`);
//rCmd.push(`openscad -o refs/${dName}/${fName}_oscad.stl refs/${dName}/${fName}.scad`);
execCmd('ls -la');
//execCmd(`npx desi76-cli -d=desi76/abri -p=px_abri_A1_v01.json --outFileName=abri_A1.scad write scad_3d_openscad`);

