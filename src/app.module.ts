import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { AttributionModule } from './attribution/attribution.module';
import { ProduitsModule } from './produits/produits.module';
import { CommissionModule } from './commission/commission.module';
import { FournisseurModule } from './fournisseur/fournisseur.module';
import { MatiereModule } from './matiere/matiere.module';
import { ReceptionModule } from './reception/reception.module';
import { InventaireModule } from './inventaire/inventaire.module';
import { MembresModule } from './membres/membres.module';
import { SuiviModule } from './suivi/suivi.module';
import { CatalogueModule } from './catalogue/catalogue.module';
import { AuthMiddleware } from './auth/auth.middleware';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      useFactory: (config: ConfigService) => ({
        uri: config.get('MONGODB_URL'),
      }),
      inject: [ConfigService],
    }),
    JwtModule.registerAsync({
      useFactory: async (config: ConfigService) => {
        return {
          secret: config.get('JWT_SECRET'),
          signOptions: { expiresIn: '24h' }
        };
      },
      inject: [ConfigService],
    }),
    AuthModule,
    UserModule,
    AttributionModule,
    ProduitsModule,
    CommissionModule,
    FournisseurModule,
    MatiereModule,
    ReceptionModule,
    InventaireModule,
    MembresModule,
    SuiviModule,
    CatalogueModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).exclude('user/login').forRoutes('*');
  }
}
