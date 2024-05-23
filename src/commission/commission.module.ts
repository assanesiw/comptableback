import { Module } from '@nestjs/common';
import { CommissionService } from './commission.service';
import { CommissionController } from './commission.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Commission, CommissionSchema } from './entities/commission.entity';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Commission.name,
        useFactory: () => {
          const schema = CommissionSchema;
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          schema.plugin(require('mongoose-autopopulate'));
          return schema;
        },
      },
    ]),
  ],
  controllers: [CommissionController],
  providers: [CommissionService],
})
export class CommissionModule {}
