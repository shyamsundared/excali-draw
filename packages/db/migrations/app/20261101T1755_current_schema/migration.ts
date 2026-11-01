#!/usr/bin/env -S node
import type { Contract as Start } from '../../snapshots/9a6981fa43d055373c2cb00f1b506e7e241fffea6f8bed3a1f0563508ef3c78a/contract';
import startContract from '../../snapshots/9a6981fa43d055373c2cb00f1b506e7e241fffea6f8bed3a1f0563508ef3c78a/contract.json' with { type: 'json' };
import type { Contract as End } from '../../snapshots/f97d5fca47f973a2852011bb196735c5978f208805f51d8c9f9efecab17b6a6e/contract';
import endContract from '../../snapshots/f97d5fca47f973a2852011bb196735c5978f208805f51d8c9f9efecab17b6a6e/contract.json' with { type: 'json' };
import { Migration, MigrationCLI } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.dropNotNull({ schema: 'public', table: 'User', column: 'photo' }),
      this.addUnique({
        schema: 'public',
        table: 'User',
        constraint: 'User_email_key',
        columns: ['email'],
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
