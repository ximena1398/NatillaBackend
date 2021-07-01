import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CampañaModule } from './modules/Campaña/Campaña.module';
import { CampañaProductoModule } from './modules/CampañaProducto/CampañaProducto.module';
import { ClienteModule } from './modules/Cliente/Cliente.module';
import { EstadoProductoModule } from './modules/EstadoProducto/EstadoProducto.module';
import { ProductoModule } from './modules/Producto/Producto.module';
import { VentaModule } from './modules/Venta/Venta.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: "default",
      type: 'postgres',
      host: 'ec2-34-193-101-0.compute-1.amazonaws.com',
      port: 5432,
      username: 'znyuowepshjrdu',
      password: '682a82458336627ca8e64f8a114d79650d758472903ed99acde25080188b9938',
      database: 'd867mgbiorjakt',
      entities: ['dist/entities/*.entity.js'],
      synchronize: true,
      ssl: { rejectUnauthorized: false }
    }),
    
    ClienteModule,
    EstadoProductoModule,
    ProductoModule,
    VentaModule,
    CampañaModule,
    CampañaProductoModule
  ],

  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
