{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = {
    nixpkgs,
    flake-utils,
    ...
  }:
    flake-utils.lib.eachDefaultSystem (
      system: let
        pkgs = import nixpkgs {inherit system;};
      in {
        devShells.default = pkgs.mkShell {
          name = "yarn-shell";
          buildInputs = with pkgs; [
            nodejs_20
            (nodePackages.yarn.override {inherit nodejs_20;})
          ];
        };
      }
    );
}
