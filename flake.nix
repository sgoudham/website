{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
      in
      {
        devShells.default = pkgs.mkShell {
          name = "yarn-shell";
          buildInputs = with pkgs; [
            nodejs-18_x
            (nodePackages.yarn.override { nodejs = nodejs-18_x; })
          ];
        };
      }
    );
}
