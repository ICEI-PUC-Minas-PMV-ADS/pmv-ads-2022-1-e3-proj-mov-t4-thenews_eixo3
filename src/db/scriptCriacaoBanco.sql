-- MySQL Script generated by MySQL Workbench
-- Tue Apr  5 16:00:49 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema heroku_fb1e780812f7b81
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema heroku_fb1e780812f7b81
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `heroku_fb1e780812f7b81` DEFAULT CHARACTER SET utf8 ;
USE `heroku_fb1e780812f7b81` ;

-- -----------------------------------------------------
-- Table `heroku_fb1e780812f7b81`.`Usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `heroku_fb1e780812f7b81`.`Usuario` (
  `idUsuario` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `senha` VARCHAR(45) NULL,
  PRIMARY KEY (`idUsuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `heroku_fb1e780812f7b81`.`Bairro`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `heroku_fb1e780812f7b81`.`Bairro` (
  `idBairro` INT NOT NULL AUTO_INCREMENT,
  `nomeBairro` VARCHAR(45) NULL,
  PRIMARY KEY (`idBairro`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `heroku_fb1e780812f7b81`.`Mensagens`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `heroku_fb1e780812f7b81`.`Mensagens` (
  `idMensagens` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NULL,
  `mensagem` VARCHAR(45) NULL,
  `imagem` LONGTEXT NULL,
  `Usuario_idUsuario` INT NOT NULL,
  `Bairro_idBairro` INT NOT NULL,
  PRIMARY KEY (`idMensagens`, `Usuario_idUsuario`, `Bairro_idBairro`),
  INDEX `fk_Mensagens_Usuario_idx` (`Usuario_idUsuario` ASC) VISIBLE,
  INDEX `fk_Mensagens_Bairro1_idx` (`Bairro_idBairro` ASC) VISIBLE,
  CONSTRAINT `fk_Mensagens_Usuario`
    FOREIGN KEY (`Usuario_idUsuario`)
    REFERENCES `heroku_fb1e780812f7b81`.`Usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Mensagens_Bairro1`
    FOREIGN KEY (`Bairro_idBairro`)
    REFERENCES `heroku_fb1e780812f7b81`.`Bairro` (`idBairro`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `heroku_fb1e780812f7b81`.`Comentarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `heroku_fb1e780812f7b81`.`Comentarios` (
  `idComentarios` INT NOT NULL AUTO_INCREMENT,
  `comentariosMensagens` VARCHAR(45) NULL,
  `Usuario_idUsuario` INT NOT NULL,
  `Mensagens_idMensagens` INT NOT NULL,
  PRIMARY KEY (`idComentarios`),
  INDEX `fk_Comentarios_Usuario1_idx` (`Usuario_idUsuario` ASC) VISIBLE,
  INDEX `fk_Comentarios_Mensagens1_idx` (`Mensagens_idMensagens` ASC) VISIBLE,
  CONSTRAINT `fk_Comentarios_Usuario1`
    FOREIGN KEY (`Usuario_idUsuario`)
    REFERENCES `heroku_fb1e780812f7b81`.`Usuario` (`idUsuario`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Comentarios_Mensagens1`
    FOREIGN KEY (`Mensagens_idMensagens`)
    REFERENCES `heroku_fb1e780812f7b81`.`Mensagens` (`idMensagens`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

INSERT INTO usuario VALUES(1,"Mateus", "email@email", 123);
INSERT INTO bairros VALUES(1,"CASTELO");
INSERT INTO mensagens VALUES(1,"TITULO", "MENSAGEM", "IMAGEM", 1,1);
insert into comentarios values (1,1,1,"comentario2 da mensagem vila da serra");