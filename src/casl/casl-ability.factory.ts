import {
  AbilityBuilder,
  AbilityClass,
  ExtractSubjectType,
  InferSubjects,
  PureAbility,
} from '@casl/ability';
import { Injectable } from '@nestjs/common';
import { User, USER_ROLE } from 'src/user/entities/user.entity';

export enum Action {
  Manage = 'manage',
  Create = 'create',
  Read = 'read',
  Update = 'update',
  Delete = 'delete',
}

export type Subjects = InferSubjects<typeof User> | 'all';

export type AppAbility = PureAbility<[Action, Subjects]>;

@Injectable()
export class CaslAbilityFactory {
  createForUser(user: User) {
    const { can, build } = new AbilityBuilder<PureAbility<[Action, Subjects]>>(
      PureAbility as AbilityClass<AppAbility>,
    );

    if (user.role === USER_ROLE.ADMIN) {
      can(Action.Manage, 'all'); // read-write access to everything
    } else {
      can(Action.Read, User, { _id: user._id });
    }

    return build({
      detectSubjectType: (item) =>
        item.constructor as ExtractSubjectType<Subjects>,
    });
  }
}
